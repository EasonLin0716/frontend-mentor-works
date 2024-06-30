import React from 'react';
import styles from './GameScreenContent.module.css';
import { GameBoard } from '.';
import CompetitorBoard from '../common/CompetitorBoard';

const GameScreenContent: React.FC = () => {
    return <div className={styles.wrapper}>
        <CompetitorBoard
            name="player 1"
            score={12}
            face="/images/player-one.svg"
        />
        <GameBoard />
        <CompetitorBoard
            name="player 2"
            score={23}
            face="/images/player-two.svg"
        />
    </div>
};

export default GameScreenContent;