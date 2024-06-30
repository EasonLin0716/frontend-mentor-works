import React from "react";
import styles from "./GameTurn.module.css";

interface GameTurnProps {
    name: string;
    remainingTime: number;
}

const GameTurn: React.FC<GameTurnProps> = ({ name, remainingTime }) => {
    return <div className={styles.wrapper}>
        <p className={styles.name}>{name}'s turn</p>
        <p className={styles.secondWrapper}>
            <span className={styles.remainingTime}>{remainingTime}</span>
            <span className={styles.secondText}>s</span>
        </p>
    </div>;
}

export default GameTurn;