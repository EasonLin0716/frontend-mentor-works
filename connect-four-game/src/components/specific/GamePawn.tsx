import React from "react";
import styles from "./GamePawn.module.css";

interface GamePawnProps {
    className?: string;
}

const GamePawn: React.FC<GamePawnProps> = ({ className }) => {
    return <div className={`${className} ${styles.wrapper}`}></div>;
}

export default GamePawn;