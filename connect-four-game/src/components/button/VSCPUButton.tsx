import React from 'react';
import styles from './VSCPUButton.module.css';
import Button from '../common/BigButton';

const VSCPUButton: React.FC = () => {
    return (
        <Button className={styles.wrapper}>
            <span className={styles.text}>play vs cpu</span>
            <img src='/images/player-vs-cpu.svg' alt='' />
        </Button>
    );
};

export default VSCPUButton;
