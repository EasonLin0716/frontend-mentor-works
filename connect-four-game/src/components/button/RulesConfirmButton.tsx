import React, { ButtonHTMLAttributes } from 'react';
import styles from './RulesConfirmButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const RulesConfirmButton: React.FC<ButtonProps> = () => (
    <button className={styles.wrapper}>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='34'
            height='24'
            viewBox='0 0 34 24'
            fill='none'
        >
            <path
                d='M2 11.5819L12.264 21.846L32.11 2'
                stroke='white'
                stroke-width='3'
            />
        </svg>
    </button>
);

export default RulesConfirmButton;
