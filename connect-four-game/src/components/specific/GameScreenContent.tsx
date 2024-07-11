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
    return <div className={styles.wrapper}>
        <CompetitorBoard
            name="player 1"
            score={player1Score}
            face="/images/player-one.svg"
        />
        <GameBoard
            gameState={gameState}
            startGame={() => startGame()}
            resetGameState={() => resetGameState()}
            setWinner={(winner: number) => setWinner(winner)}
            setGameToDraw={() => setGameToDraw}
        />
        <CompetitorBoard
            name="player 2"
            score={player2Score}
            face="/images/player-two.svg"
        />
    </div>
};

export default GameScreenContent;