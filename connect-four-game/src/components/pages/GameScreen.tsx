import React from 'react';
import styles from './GameScreen.module.css';
import { GameScreenFooter, GameScreenHeader } from '../specific';

const GameScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <GameScreenHeader />
            <GameScreenFooter />
        </div>
    );
};

export default GameScreen;
