import React, { ButtonHTMLAttributes } from 'react';
import styles from './MenuButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
  }


const MenuButton: React.FC<ButtonProps> = () => {
    return (
        <button className={styles.wrapper}>
            menu
        </button>
    );
}

export default MenuButton;