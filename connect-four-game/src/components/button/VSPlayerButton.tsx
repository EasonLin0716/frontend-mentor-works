import React from 'react';
import styles from './VSPlayerButton.module.css';
import Button from '../common/Button';

const VSCPUButton: React.FC = () => {
    return (
        <Button className={styles.wrapper}>
                <span className={styles.text}>play vs player</span>
                <img src="/images/player-vs-player.svg" alt="" />
        </Button>
    );
}

export default VSCPUButton;