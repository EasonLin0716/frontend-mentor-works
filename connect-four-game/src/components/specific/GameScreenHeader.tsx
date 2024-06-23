import React from "react";
import styles from "./GameScreenHeader.module.css";
import { MenuButton, RestartButton } from "../button";
import { CircleDotGroup } from "./index";

const GameScreenHeader: React.FC = () => {
  return (
    <header className={styles.wrapper}>
        <div className={styles.inner}>
            <MenuButton/>
            <CircleDotGroup />
            <RestartButton />
        </div>
    </header>
  );
};

export default GameScreenHeader;