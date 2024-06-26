import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameRules.module.css';
import Button from '../common/BigButton';

const GameRulesButton: React.FC = () => {
    return (
        <Link to='/rules'>
            <Button className={styles.wrapper}>game rules</Button>
        </Link>
    );
};

export default GameRulesButton;
