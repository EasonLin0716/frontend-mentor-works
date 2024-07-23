import React from "react";
import styles from "./GamePawn.module.css";

interface GamePawnProps {
    className?: string;
    isPlayer1: boolean;
    isCircled: boolean;
}

const GamePawn: React.FC<GamePawnProps> = ({ className, isPlayer1, isCircled }) => {
    const combinedClassNames: string = [
        className,
        styles.wrapper,
        isPlayer1 ? styles.isPlayer1 : styles.isPlayer2
    ].join(' ');

    return <div className={combinedClassNames}>
        {isCircled && <div className={styles.outerCircle}>
            <div className={`${styles.innerCircle} ${isPlayer1 ? styles.innerCirclePlayer1 : styles.innerCirclePlayer2}`}></div>
        </div>}
    </div>;
}

export default GamePawn;