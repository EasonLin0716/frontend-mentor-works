import React, { useState, useEffect } from 'react';
import styles from './GameBoard.module.css';
import { GameTurn, GamePawn, PutButton, GameMarker } from '.';

const GameBoard: React.FC = () => {
    const X = 7;
    const Y = 6;
    const initialBoard = Array.from({ length: X }, () => Array.from({ length: Y }, () => ({
        className: '',
        isPlayer1: false,
        isSet: false,
    })));
    const [board, setBoard] = useState(initialBoard);
    const btnLength = X * Y;

    const clickHandler = (i: number): void => {
        const putX = i % 7;
        let putY = 0;
        if (board[putX][putY]['isSet']) {
            console.log('full');
            return;
        }
        while (board[putX][putY + 1] !== undefined && board[putX][putY + 1]['isSet'] === false) {
            putY++;
        }
        const newBoard = [...board];
        newBoard[putX][putY] = {
            className: `x-${putX} y-${putY}`,
            isPlayer1: true,
            isSet: true,
        }
        setBoard(newBoard);
    }

    useEffect(() => {
        console.log(board);
    }, [board]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgBack}></div>
            <div className={styles.pawns}>
                {board.map((col, x) =>
                    col.map((p, y) =>
                        board[x][y]['isSet'] && <GamePawn key={`${x}-${y}`} className={`${p.className} ${styles.pawn}`} />
                    )
                )}
            </div>
            <div className={styles.bgFront}>
                {Array.from({ length: btnLength }, (_, i) => (
                    <PutButton key={i} onClick={() => clickHandler(i)} />
                ))}
            </div>
            <GameTurn name="player 1" remainingTime={30} />
            <GameMarker />
        </div>
    );
};

export default GameBoard;
