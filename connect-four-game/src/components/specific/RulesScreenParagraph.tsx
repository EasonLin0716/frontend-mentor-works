import React from 'react';
import styles from './RulesScreenParagraph.module.css';

interface RuleScreenParagraphProps {
    children: string;
}

const RuleScreenParagraph: React.FC<RuleScreenParagraphProps> = ({
    children,
}) => {
    return <p className={styles.wrapper}>{children}</p>;
};

export default RuleScreenParagraph;
