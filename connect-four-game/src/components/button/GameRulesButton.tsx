import React from 'react';
import styles from './GameRules.module.css';
import Button from '../common/Button';

const GameRulesButton: React.FC = () => {
    return (
        <Button className={styles.wrapper}>
            game rules
        </Button>
    );
}

export default GameRulesButton;