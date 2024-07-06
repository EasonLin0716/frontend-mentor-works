import React, { useState, useEffect } from 'react';
import styles from './GameBoard.module.css';
import { GameTurn, GamePawn, PutButton, GameMarker } from '.';

function checkVictory(board) {
    const rows = 6;
    const cols = 7;
    const winLength = 4;

    function isWinningLine(line) {
        if (line.length < winLength) return false;
        let count = 1;
        for (let i = 1; i < line.length; i++) {
            if (line[i].isSet && line[i].isPlayer1 === line[i - 1].isPlayer1) {
                count++;
                if (count === winLength) return true;
            } else {
                count = 1;
            }
        }
        return false;
    }

    // 檢查水平線
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col <= cols - winLength; col++) {
            const line = [];
            for (let k = 0; k < winLength; k++) {
                line.push(board[col + k][row]);
            }
            if (isWinningLine(line)) return true;
        }
    }

    // 檢查垂直線
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row <= rows - winLength; row++) {
            const line = [];
            for (let k = 0; k < winLength; k++) {
                line.push(board[col][row + k]);
            }
            if (isWinningLine(line)) return true;
        }
    }

    // 檢查正對角線 (\ 方向)
    for (let col = 0; col <= cols - winLength; col++) {
        for (let row = 0; row <= rows - winLength; row++) {
            const line = [];
            for (let k = 0; k < winLength; k++) {
                line.push(board[col + k][row + k]);
            }
            if (isWinningLine(line)) return true;
        }
    }

    // 檢查反對角線 (/ 方向)
    for (let col = 0; col <= cols - winLength; col++) {
        for (let row = winLength - 1; row < rows; row++) {
            const line = [];
            for (let k = 0; k < winLength; k++) {
                line.push(board[col + k][row - k]);
            }
            if (isWinningLine(line)) return true;
        }
    }

    return false;
}

const GameBoard: React.FC = () => {
    type BoardData = {
        className: string;
        isPlayer1: boolean;
        isSet: boolean;
    }
    type GameStates = {
        isReady: number;
        isPlaying: number;
        isPlayer1Win: number;
        isPlayer2Win: number;
        isDraw: number;
        isPaused: number;
    }
    const GAME_STATES: GameStates = {
        isReady: 0,
        isPlaying: 1,
        isPlayer1Win: 2,
        isPlayer2Win: 3,
        isDraw: 4,
        isPaused: 5,
    };
    const X = 7;
    const Y = 6;
    const initialBoard: BoardData[][] = Array.from({ length: X }, () => Array.from({ length: Y }, (): BoardData => ({
        className: '',
        isPlayer1: false,
        isSet: false,
    })));
    const [board, setBoard] = useState(initialBoard);
    const [gameState, setGameState] = useState(GAME_STATES['isReady']);
    const [turn, setTurn] = useState(0);
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [lastPutXValue, setLastPutXValue] = useState(-1);
    const pawnSpacesCount = X * Y;

    const getCurrentGameState = (): number => {
        console.log(board);
        console.log({ turn });
        if (turn + 1 >= pawnSpacesCount) {
            return GAME_STATES['isDraw'];
        }
        if (checkVictory(board)) {
            return GAME_STATES['isPlayer1Win'];
        }
        return GAME_STATES['isPlaying'];
    }

    const clickHandler = (i: number): void => {
        const putX = i % 7;
        setLastPutXValue(putX);
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
            isPlayer1,
            isSet: true,
        }
        setIsPlayer1(!isPlayer1);
        setBoard(newBoard);
        setTurn(turn + 1);
        setGameState(getCurrentGameState());
        if (gameState === GAME_STATES['isPlayer1Win']) {
            console.log('player 1 win');
        } else if (gameState === GAME_STATES['isPlayer2Win']) {
            // player 2 win
        }
    }

    useEffect(() => {
        // console.table(board);
    }, [board]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgBack}></div>
            <div className={styles.pawns}>
                {board.map((col, x) =>
                    col.map((p, y) =>
                        board[x][y]['isSet'] && <GamePawn key={`${x}-${y}`} isPlayer1={board[x][y]['isPlayer1']} className={`${p.className} ${styles.pawn}`} />
                    )
                )}
            </div>
            <div className={styles.bgFront}>
                {Array.from({ length: pawnSpacesCount }, (_, i) => (
                    <PutButton key={i} onClick={() => clickHandler(i)} />
                ))}
            </div>
            {gameState === GAME_STATES['isPlaying'] && <GameTurn isPlayer1={isPlayer1} />}
            <GameMarker xValue={lastPutXValue} isPlayer1={isPlayer1} />
        </div>
    );
};

export default GameBoard;
