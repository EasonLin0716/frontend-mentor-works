import React, { useMemo } from "react";
import styles from "./GameBoardWinner.module.css";
import SmallButton from "../common/SmallButton";

interface GameBoardWinnerProps {
    isPlayer1Win: boolean;
    isCpuMode: boolean;
    playAgain: Function;
}

const GameBoardWinner: React.FC<GameBoardWinnerProps> = ({ isPlayer1Win, isCpuMode, playAgain }) => {
    const name = useMemo<string>(() => {
        if (isCpuMode) {
            return isPlayer1Win ? "you" : "cpu";
        }
        return isPlayer1Win ? "player 1" : "player 2";
    }, [isPlayer1Win]);
    return <div className={styles.wrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.wins}>{isPlayer1Win && isCpuMode ? 'win' : 'wins'}</p>
        <SmallButton onClick={() => playAgain()}>play again</SmallButton>
    </div>;
}

export default GameBoardWinner;