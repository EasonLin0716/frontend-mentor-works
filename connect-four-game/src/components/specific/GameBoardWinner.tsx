import React from "react";
import styles from "./GameBoardWinner.module.css";
import SmallButton from "../common/SmallButton";

interface GameBoardWinnerProps {
    isPlayer1Win: boolean;
    playAgain: Function;
}

const GameBoardWinner: React.FC<GameBoardWinnerProps> = ({ isPlayer1Win, playAgain }) => {
    return <div className={styles.wrapper}>
        <p className={styles.name}>{isPlayer1Win ? 'player1' : 'player2'}</p>
        <p className={styles.wins}>wins</p>
        <SmallButton onClick={() => playAgain()}>play again</SmallButton>
    </div>;
}

export default GameBoardWinner;