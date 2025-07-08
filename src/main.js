const board = [
    // 0, 1 , 2,  3,  4,  5,  6,  7
    ['r','n','b','k','q','b','n','r'],//0
    ['p','p','p','p','p','p','p','p'],//1
    ['','','','','','','',''],//2
    ['','','','','','','',''],//3
    ['','','','','','','',''],//4
    ['','','','','','','',''],//5
    ['P','P','P','P','P','P','P','P'],//6
    ['R','N','B','K','Q','B','N','R'],//7
];

function isWhite(piece){
    return piece === piece.toUpperCase();
}

function isBlack(piece){
    return piece === piece.toLowerCase();
}

function toChessNotation([x, y]) {
    const files = 'ABCDEFGH';
    return files[y] + (8 - x);
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
    return moves.map(toChessNotation);
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
    return moves.map(toChessNotation); 
}

function moveBishops (x, y, board) {
    const piece = board[x][y];
    const moves = [];
    const bishopsMoves = [
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    for (const [dx, dy] of bishopsMoves) {
        let nx = x + dx;
        let ny = y + dy;
        while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            const target = board[nx][ny];
            if (target === '') {
                moves.push([nx, ny]);
            } else {
                if ((isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target))) {
                    moves.push([nx, ny]);
                }
                break;
            }
            nx += dx;
            ny += dy;
        }
        moves.forEach((move, i) => {
        moves[i] = toChessNotation(move);
        });
    }
    return moves;
}

function moveRooks(x, y, board) {
    const piece = board[x][y];
    const moves = [];
    const rookMoves = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    for (const [dx, dy] of rookMoves) {
        let nx = x + dx;
        let ny = y + dy;
        while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            const target = board[nx][ny];
            if (target === '') {
                moves.push([nx, ny]);
            } else {
                if ((isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target))) {
                    moves.push([nx, ny]);
                }
                break;
            }
            nx += dx;
            ny += dy;
        }
        moves.forEach((move, i) => {
        moves[i] = toChessNotation(move);
        });
    }
    return moves;
}

function moveQueens(x, y, board) {
    const piece = board[x][y];
    const moves = [];
    const queenMoves = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    for (const [dx, dy] of queenMoves) {
        let nx = x + dx;
        let ny = y + dy;
        while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            const target = board[nx][ny];
            if (target === '') {
                moves.push([nx, ny]);
            } else {
                if ((isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target))) {
                    moves.push([nx, ny]);
                }
                break;
            }
            nx += dx;
            ny += dy;
        }
        moves.forEach((move, i) => {
        moves[i] = toChessNotation(move);
        });
    }
    return moves;
}

function moveKings(x, y, board) {
    const piece = board [x][y];
    const moves = [];
    const kingMoves = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    for (const [dx, dy] of kingMoves) {
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            const target = board[nx][ny];
            if (target === '' || (isWhite(piece) && isBlack(target)) || (isBlack(piece) && isWhite(target))) {
                moves.push([nx, ny]);
            }
        }
        moves.forEach((move, i) => {
        moves[i] = toChessNotation(move);
        });
    }
    return moves;
}

console.log(movePawns(6, 0, board)); // Example for white pawn
console.log(moveKnights(7, 1, board)); // Example for white knight
console.log(moveBishops(7, 2, board)); // Example for white bishop
console.log(moveRooks(7, 0, board)); // Example for white rook
console.log(moveQueens(7, 4, board)); // Example for white queen
console.log(moveKings(7, 3, board)); // Example for white king
