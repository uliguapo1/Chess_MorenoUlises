const board = [
    ['r','n','b','k','q','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','K','Q','B','N','R'],
];

function isWhite(piece){
    return piece === piece.toUpperCase();
}

function isBlack(piece){
    return piece === piece.toLowerCase();
}

function movePawns (x, y, board){
    const piece = board[x][y];
    const direction = isWhite(piece) ? -1 : 1;
    const startRow = isWhite(piece) ? 6 : 1;
    const moves = [];


    // Move forward
    if (board[x + direction][y] === '') {
        moves.push([x + direction, y]);
        // Double move from starting position
        if (x === startRow && board[x + 2 * direction][y] === ''){
            moves.push([x + 2 * direction, y]);
        }
        }
    // Capture diagonally
    for (let dy of [-1, 1]) {
        const nx = x + direction; 
        const ny = y + dy;
        const target = board[nx]?.[ny];
        if (target && ((isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target)))) {
            moves.push([nx, ny]);
        }
    }
    return moves;
}

function moveKnights (x, y, board){
    const piece = board[x][y];
    const moves = [];
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    for (const [dx, dy] of knightMoves) {
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            const target = board[nx][ny];
            if (target === '' || (isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target))) {
                moves.push([nx, ny]);
            }
        }
    }
    return moves;   
}

function moveBishops (x, y, board) {
    const piece = board[x][y];
    const moves = [];
    const bishopsMoves = [
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    for (const [dx, dy] of bishopsMoves) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            const target = board[nx][ny];
            if (target === '' || (isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target))) {
                moves.push([nx, ny]);
            }
        }
    }
    return moves;
}



console.log(movePawns(6, 0, board)); // Example for white pawn
console.log(moveKnights(7, 1, board)); // Example for white knight
console.log(moveBishops(7, 2, board)); // Example for white bishop
