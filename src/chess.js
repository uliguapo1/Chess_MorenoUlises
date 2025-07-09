const chess = {
    A: {
        1: {piece: 'rook',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'rook',color: 'black',}
    },
    B: {
        1: {piece: 'knight',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'knight',color: 'black',}
        },
    C: {
        1: {piece: 'bishop',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'bishop',color: 'black',}
        },
    D: {
        1: {piece: 'queen',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'queen',color: 'black',}
    },
    E: {
        1: {piece: 'king',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'king',color: 'black',}
    },
    F: {
        1: {piece: 'bishop',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'bishop',color: 'black',}
    },
    G: {
        1: {piece: 'knight',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'knight',color: 'black',}
    },
    H: {
        1: {piece: 'rook',color: 'white',},
        2: {piece: 'pawn',color: 'white',},
        3: {piece: null,color: null,},
        4: {piece: null,color: null,},
        5: {piece: null,color: null,},
        6: {piece: null,color: null,},
        7: {piece: 'pawn',color: 'black',},
        8: {piece: 'rook',color: 'black',}
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

// Funciones de conversión para trabajar con coordenadas
function fileToIndex(file) {
    return file.charCodeAt(0) - 'A'.charCodeAt(0);
}

function indexToFile(index) {
    return String.fromCharCode('A'.charCodeAt(0) + index);
}

function getValidMoves(file, rank) {
        const piece = getPieceAt(file, rank);
    if (!piece || !piece.piece) return [];

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
                moves.push({file: newFile, rank: newRank});
            } else {
                if (target.color !== piece.color) {
                    moves.push({file: newFile, rank: newRank});
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
                moves.push({file: newFile, rank: newRank});
            }
        }
    }
    return moves;
}



console.log(getPieceAt("A", 1));
console.log(fileToIndex("A")); // 0
console.log(indexToFile(0)); // "A"






