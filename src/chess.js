var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var chess = {
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
    return (piece === null || piece === void 0 ? void 0 : piece.color) === 'white';
}
function isBlack(piece) {
    return (piece === null || piece === void 0 ? void 0 : piece.color) === 'black';
}
function getPieceAt(file, rank) {
    var _a;
    var column = chess[file];
    return (_a = column === null || column === void 0 ? void 0 : column[rank]) !== null && _a !== void 0 ? _a : null;
}
function fileToIndex(file) {
    return file.charCodeAt(0) - 'A'.charCodeAt(0);
}
function indexToFile(index) {
    return String.fromCharCode('A'.charCodeAt(0) + index);
}
function getValidMoves(file, rank) {
    var piece = getPieceAt(file, rank);
    if (!(piece === null || piece === void 0 ? void 0 : piece.piece))
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
    var piece = getPieceAt(file, rank);
    if (!piece)
        return [];
    var moves = [];
    var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var _a = directions_1[_i], dx = _a[0], dy = _a[1];
        var newFileIdx = fileToIndex(file) + dx;
        var newRank = rank + dy;
        while (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            var newFile = indexToFile(newFileIdx);
            var target = getPieceAt(newFile, newRank);
            if (!(target === null || target === void 0 ? void 0 : target.piece)) {
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
    var piece = getPieceAt(file, rank);
    if (!piece)
        return [];
    var moves = [];
    var knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    for (var _i = 0, knightMoves_1 = knightMoves; _i < knightMoves_1.length; _i++) {
        var _a = knightMoves_1[_i], dx = _a[0], dy = _a[1];
        var newFileIdx = fileToIndex(file) + dx;
        var newRank = rank + dy;
        if (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            var newFile = indexToFile(newFileIdx);
            var target = getPieceAt(newFile, newRank);
            if (!(target === null || target === void 0 ? void 0 : target.piece) || target.color !== piece.color) {
                moves.push({ file: newFile, rank: newRank });
            }
        }
    }
    return moves;
}
function getBishopMoves(file, rank) {
    var piece = getPieceAt(file, rank);
    if (!piece)
        return [];
    var moves = [];
    var directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
    for (var _i = 0, directions_2 = directions; _i < directions_2.length; _i++) {
        var _a = directions_2[_i], dx = _a[0], dy = _a[1];
        var newFileIdx = fileToIndex(file) + dx;
        var newRank = rank + dy;
        while (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            var newFile = indexToFile(newFileIdx);
            var target = getPieceAt(newFile, newRank);
            if (!(target === null || target === void 0 ? void 0 : target.piece)) {
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
    return __spreadArray(__spreadArray([], getRookMoves(file, rank), true), getBishopMoves(file, rank), true);
}
function getKingMoves(file, rank) {
    var piece = getPieceAt(file, rank);
    if (!piece)
        return [];
    var moves = [];
    var directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];
    for (var _i = 0, directions_3 = directions; _i < directions_3.length; _i++) {
        var _a = directions_3[_i], dx = _a[0], dy = _a[1];
        var newFileIdx = fileToIndex(file) + dx;
        var newRank = rank + dy;
        if (newFileIdx >= 0 && newFileIdx < 8 && newRank >= 1 && newRank <= 8) {
            var newFile = indexToFile(newFileIdx);
            var target = getPieceAt(newFile, newRank);
            if (!(target === null || target === void 0 ? void 0 : target.piece) || target.color !== piece.color) {
                moves.push({ file: newFile, rank: newRank });
            }
        }
    }
    return moves;
}
function getPawnMoves(file, rank) {
    var piece = getPieceAt(file, rank);
    var moves = [];
    var direction = (piece === null || piece === void 0 ? void 0 : piece.color) === 'white' ? 1 : -1;
    var startRank = (piece === null || piece === void 0 ? void 0 : piece.color) === 'white' ? 2 : 7;
    // Movimiento hacia adelante
    var newRank = rank + direction;
    if (newRank >= 1 && newRank <= 8) {
        var target = getPieceAt(file, newRank);
        if (!(target === null || target === void 0 ? void 0 : target.piece)) {
            moves.push({ file: file, rank: newRank });
            // Primer movimiento (2 casillas)
            if (rank === startRank) {
                var doubleRank = rank + 2 * direction;
                var doubleTarget = getPieceAt(file, doubleRank);
                if (!(doubleTarget === null || doubleTarget === void 0 ? void 0 : doubleTarget.piece)) {
                    moves.push({ file: file, rank: doubleRank });
                }
            }
        }
    }
    // Capturas diagonales
    var captureFiles = [
        indexToFile(fileToIndex(file) + 1),
        indexToFile(fileToIndex(file) - 1)
    ].filter(function (f) { return f >= 'A' && f <= 'H'; });
    for (var _i = 0, captureFiles_1 = captureFiles; _i < captureFiles_1.length; _i++) {
        var captureFile = captureFiles_1[_i];
        var captureRank = rank + direction;
        var target = getPieceAt(captureFile, captureRank);
        if (target && target.piece && target.color !== (piece === null || piece === void 0 ? void 0 : piece.color)) {
            moves.push({ file: captureFile, rank: captureRank });
        }
    }
    return moves;
}
function move(fromFile, fromRank, toFile, toRank) {
    var piece = getPieceAt(fromFile, fromRank);
    if (!(piece === null || piece === void 0 ? void 0 : piece.piece)) {
        console.log("No piece at the starting position");
        return false;
    }
    var validMoves = getValidMoves(fromFile, fromRank);
    var isValidMove = validMoves.some(function (move) {
        return move.file === toFile && move.rank === toRank;
    });
    if (!isValidMove) {
        console.log("Invalid move");
        return false;
    }
    chess[toFile][toRank] = piece;
    chess[fromFile][fromRank] = { piece: null, color: null }; // Clear the piece at the starting position
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
