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


