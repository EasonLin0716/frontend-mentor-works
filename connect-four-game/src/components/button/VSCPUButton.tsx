import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VSCPUButton.module.css';
import Button from '../common/BigButton';

const VSCPUButton: React.FC = () => {
    return (
        <Link to='/game/cpu'>
            <Button className={styles.wrapper}>
                <span className={styles.text}>play vs cpu</span>
                <img src='./images/player-vs-cpu.svg' alt='' />
            </Button>
        </Link>
    );
};

export default VSCPUButton;
