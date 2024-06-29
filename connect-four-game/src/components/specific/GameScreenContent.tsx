import React from 'react';
import styles from './GameScreenContent.module.css';
import { GameBoard, CompetitorBoard } from '.';

const GameScreenContent: React.FC = () => {
    return <div className={styles.wrapper}>
        <CompetitorBoard
            name="player1"
            score={12}
            face="/images/player-one.svg"
        />
        <GameBoard />
        <CompetitorBoard
            name="player2"
            score={23}
            face="/images/player-two.svg"
        />
    </div>
};

export default GameScreenContent;