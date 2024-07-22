import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GameScreenContent.module.css';
import { GameBoard } from '.';
import CompetitorBoard from '../common/CompetitorBoard';

interface GameScreenContentProps {
    gameState: number;
    startGame: () => void;
    resetGameState: () => void;
    setWinner: (winner: number) => void;
    setGameToDraw: () => void;
}

const GameScreenContent: React.FC<GameScreenContentProps> = ({ gameState, startGame, resetGameState, setWinner, setGameToDraw }) => {
    const { mode } = useParams<{ mode: string }>();
    const isCpuMode = useMemo<boolean>(() => mode === 'cpu', [mode]);
    const [player1Score, setPlayer1Score] = useState<number>(0);
    const [player2Score, setPlayer2Score] = useState<number>(0);
    const addScore = (winner: number): void => {
        if (winner === 1) {
            setPlayer1Score(player1Score + 1);
        } else {
            setPlayer2Score(player2Score + 1);
        }
    }
    return <div className={styles.wrapper}>
        <div className={styles.inner}>
            <CompetitorBoard
                className={styles.leftBoard}
                name={isCpuMode ? "you" : "player 1"}
                score={player1Score}
                face="./images/player-one.svg"
            />
            <GameBoard
                gameState={gameState}
                isCpuMode={isCpuMode}
                startGame={() => startGame()}
                resetGameState={() => resetGameState()}
                setWinner={(winner: number) => {
                    addScore(winner)
                    setWinner(winner)
                }}
                setGameToDraw={() => setGameToDraw}
            />
            <CompetitorBoard
                className={styles.rightBoard}
                name={isCpuMode ? "cpu" : "player 2"}
                score={player2Score}
                face={isCpuMode ? "./images/cpu.svg" : "./images/player-two.svg"}
            />
        </div>
    </div>
};

export default GameScreenContent;