import React from 'react';
import styles from './MainMenuScreen.module.css';
import { CircleDotGroup } from '../specific';
import { VSCPUButton, VSPlayerButton, GameRulesButton } from '../button';

const MainMenuScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.dotGroupWrapper}>
                    <CircleDotGroup />
                </div>
                <div className={styles.buttonGroup}>
                    <VSCPUButton />
                    <VSPlayerButton />
                    <GameRulesButton />
                </div>
            </div>
        </div>
    );
};

export default MainMenuScreen;
