import React from "react";
import styles from "./GamePawn.module.css";

interface GamePawnProps {
    className?: string;
    isPlayer1: boolean;
}

const GamePawn: React.FC<GamePawnProps> = ({ className, isPlayer1 }) => {
    return <div className={`${className} ${styles.wrapper} ${isPlayer1 ? styles.isPlayer1 : styles.isPlayer2}`}></div>;
}

export default GamePawn;