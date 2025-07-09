"use strict";
const chess = {
    A: {
        1: { piece: 'rook', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'rook', color: 'black', }
    },
    B: {
        1: { piece: 'knight', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'knight', color: 'black', }
    },
    C: {
        1: { piece: 'bishop', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'bishop', color: 'black', }
    },
    D: {
        1: { piece: 'queen', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'queen', color: 'black', }
    },
    E: {
        1: { piece: 'king', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'king', color: 'black', }
    },
    F: {
        1: { piece: 'bishop', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'bishop', color: 'black', }
    },
    G: {
        1: { piece: 'knight', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'knight', color: 'black', }
    },
    H: {
        1: { piece: 'rook', color: 'white', },
        2: { piece: 'pawn', color: 'white', },
        3: { piece: null, color: null, },
        4: { piece: null, color: null, },
        5: { piece: null, color: null, },
        6: { piece: null, color: null, },
        7: { piece: 'pawn', color: 'black', },
        8: { piece: 'rook', color: 'black', }
    }
};
function isWhite(piece) {
    return piece && piece.color === 'white';
}
function isBlack(piece) {
    return piece && piece.color === 'black';
}
function getPieceAt(file, rank) {
    const column = chess[file];
    if (column && column[rank]) {
        return column[rank];
    }
    return null;
}
// Funciones de conversion para trabajar con coordenadas
function fileToIndex(file) {
    return file.charCodeAt(0) - 'A'.charCodeAt(0);
}
function indexToFile(index) {
    return String.fromCharCode('A'.charCodeAt(0) + index);
}
function getValidMoves(file, rank) {
    const piece = getPieceAt(file, rank);
    if (!piece || !piece.piece)
        return [];
    switch (piece.piece.toLowerCase()) {
        case 'rook': return getRookMoves(file, rank);
        case 'knight': return getKnightMoves(file, rank);
        case 'bishop': return getBishopMoves(file, rank);
        case 'queen': return getQueenMoves(file, rank);
        case 'king': return getKingMoves(file, rank);
        case 'pawn': return getPawnMoves(file, rank);
        default: return [];
    }
}
function getRookMoves(file, rank) {
    const piece = getPieceAt(file, rank);
    const moves = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Abajo, arriba, derecha, izquierda
    for (const [dx, dy] of directions) {
        let newFileIdx = fileToIndex(file) + dx;
        let newRank = rank + dy;
        while (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            if (!target.piece) {
                moves.push({ file: newFile, rank: newRank });
            }
            else {
                if (target.color !== piece.color) {
                    moves.push({ file: newFile, rank: newRank });
                }
                break;
            }
            newFileIdx += dx;
            newRank += dy;
        }
    }
    return moves;
}
function getKnightMoves(file, rank) {
    const piece = getPieceAt(file, rank);
    const moves = [];
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    for (const [dx, dy] of knightMoves) {
        const newFileIdx = fileToIndex(file) + dx;
        const newRank = rank + dy;
        if (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            if (!target.piece || target.color !== piece.color) {
                moves.push({ file: newFile, rank: newRank });
            }
        }
    }
    return moves;
}
function getBishopMoves(file, rank) {
    const piece = getPieceAt(file, rank);
    const moves = [];
    const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
    for (const [dx, dy] of directions) {
        let newFileIdx = fileToIndex(file) + dx;
        let newRank = rank + dy;
        while (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            if (!target.piece) {
                moves.push({ file: newFile, rank: newRank });
            }
            else {
                if (target.color !== piece.color) {
                    moves.push({ file: newFile, rank: newRank });
                }
                break;
            }
            newFileIdx += dx;
            newRank += dy;
        }
    }
    return moves;
}
function getQueenMoves(file, rank) {
    return [...getRookMoves(file, rank), ...getBishopMoves(file, rank)];
}
function getKingMoves(file, rank) {
    const piece = getPieceAt(file, rank);
    const moves = [];
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];
    for (const [dx, dy] of directions) {
        const newFileIdx = fileToIndex(file) + dx;
        const newRank = rank + dy;
        if (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            if (!target.piece || target.color !== piece.color) {
                moves.push({ file: newFile, rank: newRank });
            }
        }
    }
    return moves;
}
function getPawnMoves(file, rank) {
    const piece = getPieceAt(file, rank);
    const moves = [];
    const direction = piece.color === 'white' ? 1 : -1;
    const startRank = piece.color === 'white' ? 2 : 7;
    // Movimiento hacia adelante
    const newRank = rank + direction;
    if (newRank >= 1 && newRank <= 8) {
        const target = getPieceAt(file, newRank);
        if (!target.piece) {
            moves.push({ file: file, rank: newRank });
            // Primer movimiento (2 casillas)
            if (rank === startRank) {
                const doubleRank = rank + 2 * direction;
                const doubleTarget = getPieceAt(file, doubleRank);
                if (!doubleTarget.piece) {
                    moves.push({ file: file, rank: doubleRank });
                }
            }
        }
    }
    // Capturas diagonales
    const captureFiles = [
        indexToFile(fileToIndex(file) + 1),
        indexToFile(fileToIndex(file) - 1)
    ].filter(f => f >= 'A' && f <= 'H');
    for (const captureFile of captureFiles) {
        const captureRank = rank + direction;
        const target = getPieceAt(captureFile, captureRank);
        if (target && target.piece && target.color !== piece.color) {
            moves.push({ file: captureFile, rank: captureRank });
        }
    }
    return moves;
}
function move(fromFile, fromRank, toFile, toRank) {
    const piece = getPieceAt(fromFile, fromRank);
    if (!piece || !piece.piece) {
        console.log("No piece at the starting position");
        return false;
    }
    //Obtener movimientos validos
    const validMoves = getValidMoves(fromFile, fromRank);
    //Verificar si el movimiento es valido
    const isValidMove = validMoves.some(move => move.file === toFile && move.rank === toRank);
    if (!isValid) {
        console.log("Invalid move");
        return false;
    }
    // Mover la pieza
    chess[toFile][toRank] = piece;
    chess[fromFile][fromRank] = { piece: null, color: null };
    return true;
}
console.log(getPieceAt("A", 1));
console.log(fileToIndex("A")); // 0
console.log(indexToFile(0)); // "A"
console.log(getValidMoves("A", 2)); // Muestra los movimientos validos para el peón en A2
console.log(move("A", 2, "A", 5));
console.log(move("A", 2, "A", 4)); // Mover el peón de A2 a A4
console.log(getPieceAt("A", 4));
console.log(getPieceAt("A", 2));
