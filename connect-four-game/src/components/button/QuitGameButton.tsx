import React from 'react';
import styles from './QuitGameButton.module.css';
import Button from '../common/Button';

const VSCPUButton: React.FC = () => {
    return (
        <Button className={styles.wrapper}>
            quit game
        </Button>
    );
}

export default VSCPUButton;