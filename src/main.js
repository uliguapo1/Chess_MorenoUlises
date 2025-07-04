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
        
    }
}