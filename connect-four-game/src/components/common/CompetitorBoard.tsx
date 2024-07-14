import React from "react";
import styles from "./CompetitorBoard.module.css";

interface CompetitorBoardProps {
    name: string;
    score: number;
    face: string;
    className?: string;
}

const CompetitorBoard: React.FC<CompetitorBoardProps> = ({ name, score, face, className }) => {
    return <div className={`${styles.wrapper} ${className}`}>
        <p className={styles.name}>{name}</p>
        <p className={styles.score}>{score}</p>
        <img className={styles.face} src={face} alt="" />
    </div>;
};

export default CompetitorBoard;