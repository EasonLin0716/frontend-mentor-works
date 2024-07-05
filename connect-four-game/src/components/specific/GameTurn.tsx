import React, { useState, useEffect, useMemo } from "react";
import styles from "./GameTurn.module.css";

interface GameTurnProps {
    isPlayer1: boolean;
}


const GameTurn: React.FC<GameTurnProps> = ({ isPlayer1 }) => {
    const [remainingTime, setRemainingTime] = useState(30);

    useEffect(() => {
        setRemainingTime(30);
        const interval = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlayer1]);

    const name = useMemo(() => isPlayer1 ? 'player 1' : 'player 2', [isPlayer1]);

    return <div className={`${styles.wrapper} ${isPlayer1 ? styles.isPlayer1 : styles.isPlayer2}`}>
        <p className={`${styles.name} ${isPlayer1 ? styles.isPlayer1 : styles.isPlayer2}`}>{name}'s turn</p>
        <p className={`${styles.secondWrapper} ${isPlayer1 ? styles.isPlayer1 : styles.isPlayer2}`}>
            <span className={styles.remainingTime}>{remainingTime}</span>
            <span className={styles.secondText}>s</span>
        </p>
    </div>;
}

export default GameTurn;