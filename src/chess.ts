// Definir interfaces
interface ChessPiece {
  piece: string | null;
  color: 'white' | 'black' | null;
}

interface ChessBoard {
  [key: string]: {
    [key: number]: ChessPiece;
  };
}

interface Position {
  file: string;
  rank: number;
}

const chess: ChessBoard = {
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

function isWhite(piece: ChessPiece | null): boolean {
    return piece?.color === 'white';
}

function isBlack(piece: ChessPiece | null): boolean {
    return piece?.color === 'black';
}

function getPieceAt(file: string, rank: number): ChessPiece | null {
    const column = chess[file];
    return column?.[rank] ?? null;
}

function fileToIndex(file: string): number {
    return file.charCodeAt(0) - 'A'.charCodeAt(0);
}

function indexToFile(index: number): string {
    return String.fromCharCode('A'.charCodeAt(0) + index);
}

function getValidMoves(file: string, rank: number): Position[] {
    const piece = getPieceAt(file, rank);
    if (!piece?.piece) return [];

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

function getRookMoves(file: string, rank: number): Position[] {
    const piece = getPieceAt(file, rank);
    if (!piece) return [];
    
    const moves: Position[] = [];
    const directions: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (const [dx, dy] of directions) {
        let newFileIdx = fileToIndex(file) + dx;
        let newRank = rank + dy;
        
        while (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            
            if (!target?.piece) {
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

function getKnightMoves(file: string, rank: number): Position[] {
    const piece = getPieceAt(file, rank);
    if (!piece) return [];

    const moves: Position[] = [];
    const knightMoves: [number, number][] = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    for (const [dx, dy] of knightMoves) {
        const newFileIdx = fileToIndex(file) + dx;
        const newRank = rank + dy;
        
        if (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            
            if (!target?.piece || target.color !== piece.color) {
                moves.push({file: newFile, rank: newRank});
            }
        }
    }
    return moves;
}

function getBishopMoves(file: string, rank: number): Position[] {
    const piece = getPieceAt(file, rank);
    if (!piece) return [];

    const moves: Position[] = [];
    const directions: [number, number][] = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

    for (const [dx, dy] of directions) {
        let newFileIdx = fileToIndex(file) + dx;
        let newRank = rank + dy;
        
        while (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);

            if (!target?.piece) {
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

function getQueenMoves(file: string, rank: number): Position[] {
    return [...getRookMoves(file, rank), ...getBishopMoves(file, rank)];
}

function getKingMoves(file: string, rank: number): Position[] {
    const piece = getPieceAt(file, rank);
    if (!piece) return [];

    const moves: Position[] = [];
    const directions: [number, number][] = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    for (const [dx, dy] of directions) {
        const newFileIdx = fileToIndex(file) + dx;
        const newRank = rank + dy;
        
        if (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            const newFile = indexToFile(newFileIdx);
            const target = getPieceAt(newFile, newRank);
            
            if (!target?.piece || target.color !== piece.color) {
                moves.push({file: newFile, rank: newRank});
            }
        }
    }
    return moves;
}

function getPawnMoves(file: string, rank: number): Position[] {
    const piece = getPieceAt(file, rank);
    const moves: Position[] = [];
    const direction = piece?.color === 'white' ? 1 : -1;
    const startRank = piece?.color === 'white' ? 2 : 7;

    // Movimiento hacia adelante
    const newRank = rank + direction;
    if (newRank >= 1 && newRank <= 8) {
        const target = getPieceAt(file, newRank);
        if (!target?.piece) {
            moves.push({file: file, rank: newRank});
            
            // Primer movimiento (2 casillas)
            if (rank === startRank) {
                const doubleRank = rank + 2 * direction;
                const doubleTarget = getPieceAt(file, doubleRank);
                if (!doubleTarget?.piece) {
                    moves.push({file: file, rank: doubleRank});
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

        if (target && target.piece && target.color !== piece?.color) {
            moves.push({file: captureFile, rank: captureRank});
        }
    }

    return moves;
}

function move(fromFile: string, fromRank: number, toFile: string, toRank: number): boolean {
    const piece = getPieceAt(fromFile, fromRank);
    if (!piece?.piece) {
        console.log("No piece at the starting position");
        return false;
    }
    
    const validMoves = getValidMoves(fromFile, fromRank);
    const isValidMove = validMoves.some(move => 
        move.file === toFile && move.rank === toRank
    );
    
    if (!isValidMove) {
        console.log("Invalid move");
        return false;
    }
    
    chess[toFile][toRank] = piece;
    chess[fromFile][fromRank] = { piece: null, color: null }; // Clear the piece at the starting position
    return true;
}

function getPieceAndMoves(expectedPiece: string, cell: string): {
  piece: string | null;
  color: 'white' | 'black' | null;
  moves: [string, number][];
  hasCapture: boolean;
  validPiece: boolean;
} {
  const file = cell.charAt(0).toUpperCase();
  const rank = parseInt(cell.slice(1)); // soporta A10

  const pieceData = getPieceAt(file, rank);

  if (!pieceData?.piece) {
    return { piece: null, color: null, moves: [], hasCapture: false, validPiece: false };
  }

  const validMoves = getValidMoves(file, rank);
  const formattedMoves: [string, number][] = [];
  let hasCapture = false;

  for (const move of validMoves) {
    const target = getPieceAt(move.file, move.rank);
    if (target?.piece && target.color !== pieceData.color) {
      hasCapture = true;
      formattedMoves.push([move.file, move.rank]);
    }
  }

  return {
    piece: pieceData.piece, 
    color: pieceData.color, 
    moves: formattedMoves, 
    hasCapture,
    validPiece: true
    };
}

// console.log(getPieceAt("A", 1));// Muestra la pieza en la celda deseada
// console.log(getValidMoves("A", 2)); // Muestra los movimientos validos para el peón en A2
// console.log(move("A", 2, "A", 5));// Mover el peón de A2 a A5 (movimiento inválido)
// console.log(move("A", 2, "A", 4)); // Mover el peón de A2 a A4
// console.log(getPieceAt("A", 4))// Muestra la pieza en la celda A4 después del movimiento
// console.log(getPieceAt("A", 2))// Valida que la celda A2 esté vacía después del movimiento
//console.log(getPieceAndMoves("A2")); // Muestra la pieza y sus movimientos válidos

console.log(move("A", 2, "A", 4)); 
console.log(move("A", 7, "A", 5));
console.log(move("B", 7, "B", 5));  
console.log(getPieceAndMoves("pawn", "A4")); // Muestra la pieza y sus movimientos válidos
console.log(getPieceAndMoves("pawn", "A5")); 
console.log(getPieceAndMoves("pawn", "B5")); 
