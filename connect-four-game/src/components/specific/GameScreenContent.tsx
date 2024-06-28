import React from 'react';
import styles from './GameScreenContent.module.css';

const GameScreenContent: React.FC = () => {
    return <div className={styles.wrapper}>
        <div className={styles.gameBoard}></div>
    </div>
};

export default GameScreenContent;