import React, { useState, useMemo, useEffect } from 'react';
import styles from './GameBoard.module.css';
import { GameTurn, GamePawn, PutButton, GameMarker, GameBoardWinner } from '.';
import { BoardData, BoardDataArray } from '../../types';
import { GAME_STATES } from '../../constants';

interface GameBoardProps {
    gameState: number;
    isCpuMode: boolean;
    startGame: () => void;
    resetGameState: () => void;
    setWinner: (winner: number) => void;
    setGameToDraw: () => void;
}

const COLS: number = 7;
const ROWS: number = 6;
const WIN_LENGTH: number = 4;

function getIsPlayingOrWinner(board: BoardDataArray): number {

    function _checkWinner(line: BoardData[]) {
        if (line.length < WIN_LENGTH) return 0;
        let count: number = 1;
        for (let i: number = 1; i < line.length; i++) {
            if (line[i].isSet && line[i - 1].isSet && line[i].isPlayer1 === line[i - 1].isPlayer1) {
                count++;
                if (count === WIN_LENGTH) {
                    for (let j: number = 0; j < line.length; j++) {
                        line[j].isCircled = true;
                    }
                    return line[i].isPlayer1 ? 1 : 2;
                };
            } else {
                count = 1;
            }
        }
        return 0;
    }

    // 檢查水平線
    for (let row: number = 0; row < ROWS; row++) {
        for (let col: number = 0; col <= COLS - WIN_LENGTH; col++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < WIN_LENGTH; k++) {
                line.push(board[col + k][row]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    // 檢查垂直線
    for (let col: number = 0; col < COLS; col++) {
        for (let row: number = 0; row <= ROWS - WIN_LENGTH; row++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < WIN_LENGTH; k++) {
                line.push(board[col][row + k]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    // 檢查正對角線 (\ 方向)
    for (let col: number = 0; col <= COLS - WIN_LENGTH; col++) {
        for (let row: number = 0; row <= ROWS - WIN_LENGTH; row++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < WIN_LENGTH; k++) {
                line.push(board[col + k][row + k]);
            }
            const winner = _checkWinner(line);
            if (winner !== 0) {
                return winner;
            };
        }
    }

    // 檢查反對角線 (/ 方向)
    for (let col: number = 0; col <= COLS - WIN_LENGTH; col++) {
        for (let row: number = WIN_LENGTH - 1; row < ROWS; row++) {
            const line: BoardData[] = [];
            for (let k: number = 0; k < WIN_LENGTH; k++) {
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

const GameBoard: React.FC<GameBoardProps> = ({ gameState, isCpuMode, startGame, resetGameState, setWinner, setGameToDraw }) => {
    const initialBoard: BoardDataArray = Array.from({ length: COLS }, () => Array.from({ length: ROWS }, (): BoardData => ({
        className: '',
        isPlayer1: false,
        isSet: false,
        isCircled: false,
    })));
    const [board, setBoard] = useState<BoardDataArray>(initialBoard);
    const [turn, setTurn] = useState<number>(0);
    const [isPlayer1, setIsPlayer1] = useState<boolean>(true);
    const [lastPutXValue, setLastPutXValue] = useState<number>(-1);
    const pawnSpacesCount: number = COLS * ROWS;
    const isSomeoneWin = useMemo<boolean>(() => gameState === GAME_STATES['player1IsWin'] || gameState === GAME_STATES['player2IsWin'], [gameState]);
    const availableXSpaceList = useMemo<number[]>(() => {
        const res = [];
        for (let i = 0; i < COLS; i++) {
            if (!board[i][0]['isSet']) {
                res.push(i);
            }
        }
        return res;
    }, [board]);

    const _getCpuNextMove = (): number => {
        return availableXSpaceList[Math.floor(Math.random() * availableXSpaceList.length)]
    }

    const _putPawn = (x: number) => {
        if (gameState !== GAME_STATES['isPlaying'] && gameState !== GAME_STATES['isReady']) return;
        const putX = x % 7;
        setLastPutXValue(putX);
        let putY = 0;
        if (board[putX][putY]['isSet']) {
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
            isCircled: false,
        }
        setIsPlayer1(!isPlayer1);
        setBoard(newBoard);
        setTurn(turn + 1);
        updateCurrentGameState();
    }

    const updateCurrentGameState = (): number | void => {
        if (turn + 1 >= pawnSpacesCount) {
            return setGameToDraw();
        }
        const winner = getIsPlayingOrWinner(board);
        if (winner === 1 || winner === 2) {
            return setWinner(winner);
        }
        return startGame();
    }

    const clickHandler = (i: number): void => {
        if (isCpuMode && !isPlayer1) return;
        _putPawn(i);
    }

    const restartGame = (): void => {
        setBoard(initialBoard);
        setTurn(0);
        setIsPlayer1(true);
        setLastPutXValue(-1);
    }

    useEffect(() => {
        if (gameState === GAME_STATES['isReady']) {
            restartGame();
        }
    }, [gameState])

    if (isCpuMode) {
        useEffect(() => {
            setTimeout(() => {
                if (!isPlayer1) {
                    const cpuNextMove: number = _getCpuNextMove();
                    _putPawn(cpuNextMove);
                }
            }, 1000);
        }, [isPlayer1]);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgBack}></div>
            <div className={styles.pawns}>
                {board.map((col, x) =>
                    col.map((p, y) =>
                        board[x][y]['isSet'] && <GamePawn key={`${x}-${y}`} isPlayer1={board[x][y]['isPlayer1']} isCircled={board[x][y]['isCircled']} className={`${p.className} ${styles.pawn}`} />
                    )
                )}
            </div>
            <div className={styles.bgFront}>
                {Array.from({ length: pawnSpacesCount }, (_, i) => (
                    <PutButton key={i} onClick={() => clickHandler(i)} />
                ))}
            </div>
            {isSomeoneWin && <GameBoardWinner isPlayer1Win={gameState === GAME_STATES['player1IsWin']} isCpuMode={isCpuMode} playAgain={() => resetGameState()} />}
            {gameState === GAME_STATES['isPlaying'] && <GameTurn isPlayer1={isPlayer1} isCpuMode={isCpuMode} />}
            <GameMarker xValue={lastPutXValue} isPlayer1={isPlayer1} />
        </div>
    );
};

export default GameBoard;
