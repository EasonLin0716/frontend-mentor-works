import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VSPlayerButton.module.css';
import Button from '../common/BigButton';

const VSCPUButton: React.FC = () => {
    return (
        <Link to='/game/player'>
            <Button className={styles.wrapper}>
                <span className={styles.text}>play vs player</span>
                <img src='./images/player-vs-player.svg' alt='' />
            </Button>
        </Link>
    );
};

export default VSCPUButton;
