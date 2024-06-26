import React from 'react';
import styles from './RulesScreenNumber.module.css';

interface RuleScreenNumberProps {
    children: string;
}

const RulesScreenNumber: React.FC<RuleScreenNumberProps> = ({ children }) => {
    return <span className={styles.wrapper}>{children}</span>;
};

export default RulesScreenNumber;
