import React from "react";
import styles from "./GameMarker.module.css";

const GameMarker: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <img src="/images/marker-red.svg" alt="" />
        </div>
    );
};

export default GameMarker;