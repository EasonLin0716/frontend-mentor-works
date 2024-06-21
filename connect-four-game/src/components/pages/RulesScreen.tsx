import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RulesScreen.module.css';
import { RuleScreenParagraph, RuleScreenSubtitle } from '../specific/';
import { rulesScreenData as data } from '../../constants';
const { title, objectiveSubtitle, objectiveDescription, howToPlaySubtitle, howToPlayDescriptions } = data;

const RulesScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <div className={`${styles.inner} ${styles.isFirstInner}`}>
                    <RuleScreenSubtitle>{objectiveSubtitle}</RuleScreenSubtitle>
                    <RuleScreenParagraph>{objectiveDescription}</RuleScreenParagraph>
                </div>
                <div className={styles.inner}>
                    <RuleScreenSubtitle>{howToPlaySubtitle}</RuleScreenSubtitle>
                    <ol className={styles.listContainer}>
                        {howToPlayDescriptions.map((description, index) => (
                            <li key={index} className={styles.listItem}>
                                <span className={styles.listNumber}>{index + 1}</span>
                                <RuleScreenParagraph>{description}</RuleScreenParagraph>
                            </li>
                        ))}
                    </ol>
                </div>
                <Link to="/">
                    <button className={styles.backButton}>
                        <img src="/images/confirm.svg" alt="" width={28} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RulesScreen;
