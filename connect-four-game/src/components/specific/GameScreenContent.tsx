import React, { useState } from 'react';
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
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const addScore = (winner: number) => {
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
                name="player 1"
                score={player1Score}
                face="/images/player-one.svg"
            />
            <GameBoard
                gameState={gameState}
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
                name="player 2"
                score={player2Score}
                face="/images/player-two.svg"
            />
        </div>
    </div>
};

export default GameScreenContent;