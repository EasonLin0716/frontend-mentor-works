import React from 'react';
import styles from './GameScreenHeader.module.css';
import { MenuButton, RestartButton } from '../button';
import { CircleDotGroup } from './index';

interface GameScreenHeaderProps {
    openMenu: () => void;
    resetGameState: () => void;
}

const GameScreenHeader: React.FC<GameScreenHeaderProps> = ({
    openMenu,
    resetGameState,
}) => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <MenuButton openMenu={openMenu} />
                <CircleDotGroup />
                <RestartButton onClick={resetGameState} />
            </div>
        </header>
    );
};

export default GameScreenHeader;
