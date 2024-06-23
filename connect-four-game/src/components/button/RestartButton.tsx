import React, { ButtonHTMLAttributes } from 'react';
import SmallButton from '../common/SmallButton';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
  }


const RestartButton: React.FC<ButtonProps> = () => {
    return (
        <SmallButton>restart</SmallButton>
    );
}

export default RestartButton;