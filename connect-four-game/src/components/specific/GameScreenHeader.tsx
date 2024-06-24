import React from "react";
import styles from "./GameScreenHeader.module.css";
import { MenuButton, RestartButton } from "../button";
import { CircleDotGroup } from "./index";

interface GameScreenHeaderProps {
  openMenu: () => void;
}

const GameScreenHeader: React.FC<GameScreenHeaderProps> = ({ openMenu }) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <MenuButton openMenu={openMenu} />
        <CircleDotGroup />
        <RestartButton />
      </div>
    </header>
  );
};

export default GameScreenHeader;