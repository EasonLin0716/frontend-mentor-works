import React, { useState, useEffect } from 'react';
import styles from './GameBoard.module.css';
import { GameTurn, GamePawn, PutButton, GameMarker } from '.';

type BoardData = {
    className: string;
    isPlayer1: boolean;
    isSet: boolean;
}

type BoardDataArray = BoardData[][];

type GameStates = {
    isReady: number;
    isPlaying: number;
    player1IsWin: number;
    player2IsWin: number;
    isDraw: number;
    isPaused: number;
}
const GAME_STATES: GameStates = {
    isReady: 0,
    isPlaying: 1,
    player1IsWin: 2,
    player2IsWin: 3,
    isDraw: 4,
    isPaused: 5,
};
const X = 7;
const Y = 6;

function getIsPlayingOrWinner(board: BoardDataArray): number {
    const rows = Y;
    const cols = X;
    const winLength = 4;

    function _checkWinner(line: BoardData[]) {
        if (line.length < winLength) return 0;
        let count: number = 1;
        for (let i: number = 1; i < line.length; i++) {
            if (line[i].isSet && line[i - 1].isSet && line[i].isPlayer1 === line[i - 1].isPlayer1) {
                count++;
                if (count === winLength) {
                    return line[i].isPlayer1 ? 1 : 2;
                };
            } else {
                count = 1;
            }
        }
        return 0;
    }

    // 檢查水平線
    for (let row: number = 0; row < rows; row++) {
        for (let col: number = 0; col <= cols - winLength; col++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < winLength; k++) {
                line.push(board[col + k][row]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    // 檢查垂直線
    for (let col: number = 0; col < cols; col++) {
        for (let row: number = 0; row <= rows - winLength; row++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < winLength; k++) {
                line.push(board[col][row + k]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    // 檢查正對角線 (\ 方向)
    for (let col: number = 0; col <= cols - winLength; col++) {
        for (let row: number = 0; row <= rows - winLength; row++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < winLength; k++) {
                line.push(board[col + k][row + k]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    // 檢查反對角線 (/ 方向)
    for (let col: number = 0; col <= cols - winLength; col++) {
        for (let row: number = winLength - 1; row < rows; row++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < winLength; k++) {
                line.push(board[col + k][row - k]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    return 0;
}

const GameBoard: React.FC = () => {
    const initialBoard: BoardDataArray = Array.from({ length: X }, () => Array.from({ length: Y }, (): BoardData => ({
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
        if (turn + 1 >= pawnSpacesCount) {
            return GAME_STATES['isDraw'];
        }
        const winner = getIsPlayingOrWinner(board);
        if (winner === 1) {
            return GAME_STATES['player1IsWin'];
        }
        if (winner === 2) {
            return GAME_STATES['player2IsWin'];
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
        const newGameState = getCurrentGameState();
        setGameState(newGameState);
    }

    useEffect(() => {
        if (gameState === GAME_STATES['player1IsWin']) {
            console.log('player 1 win');
        } else if (gameState === GAME_STATES['player2IsWin']) {
            console.log('player 2 win');
        }
    }, [gameState]);

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
