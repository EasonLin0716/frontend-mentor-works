import React from "react";
import styles from "./GameMarker.module.css";

interface GameMarkerProps {
    xValue: number;
    isPlayer1: boolean;
}

const GameMarker: React.FC<GameMarkerProps> = ({ xValue, isPlayer1 }) => {
    const renderingMarkerColor: string = isPlayer1 ? 'yellow' : 'red';
    return (
        xValue > -1 &&
        <div className={`${styles.wrapper} ${styles[`xCor${xValue}`]}`}>
            <img src={`./images/marker-${renderingMarkerColor}.svg`} alt="" />
        </div>
    );
};

export default GameMarker;