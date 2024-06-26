import React from 'react';
import styles from './RulesScreenSubtitle.module.css';

interface RuleScreenSubtitleProps {
    children: string;
}

const RulesScreenSubtitle: React.FC<RuleScreenSubtitleProps> = ({
    children,
}) => {
    return <h2 className={styles.wrapper}>{children}</h2>;
};

export default RulesScreenSubtitle;
