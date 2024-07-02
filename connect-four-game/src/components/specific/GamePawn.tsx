import React from "react";
import styles from "./GamePawn.module.css";

interface GamePawnProps {
    className?: string;
    isPlayer1: boolean;
}

const GamePawn: React.FC<GamePawnProps> = ({ className, isPlayer1 }) => {
    const combinedClassNames = [
        className,
        styles.wrapper,
        isPlayer1 ? styles.isPlayer1 : styles.isPlayer2
    ].join(' ');

    return <div className={combinedClassNames}></div>;
}

export default GamePawn;