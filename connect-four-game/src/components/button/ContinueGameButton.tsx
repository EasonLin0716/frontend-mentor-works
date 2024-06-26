import React from 'react';
import styles from './ContinueGameButton.module.css';
import Button from '../common/BigButton';

const VSCPUButton: React.FC = () => {
    return <Button className={styles.wrapper}>continue game</Button>;
};

export default VSCPUButton;
