import React from 'react';
import styles from './GameScreenFooter.module.css';
import { GAME_STATES } from '../../constants';

interface GameScreenFooterProps {
    gameState: number
}

const GameScreenFooter: React.FC<GameScreenFooterProps> = ({ gameState }) => {
    return <footer className={`${styles.wrapper} ${gameState === GAME_STATES['player1IsWin'] && styles.player1IsWin} ${gameState === GAME_STATES['player2IsWin'] && styles.player2IsWin}`}></footer>;
};

export default GameScreenFooter;
