import React from 'react';
import styles from './CircleDotGroup.module.css';
import { PinkCircleDot, YellowCircleDot } from '../icons';

const CircleDotGroup: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <PinkCircleDot />
            <YellowCircleDot />
            <YellowCircleDot />
            <PinkCircleDot />
        </div>
    );
};

export default CircleDotGroup;
