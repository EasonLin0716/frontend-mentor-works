import React from 'react';
import styles from './CircleDot.module.css';

interface CircleDotProps {
    className?: string;
}

const CircleDot: React.FC<CircleDotProps> = ({ className }) => {
    return <div className={`${styles.wrapper} ${className}`}></div>;
};

export default CircleDot;
