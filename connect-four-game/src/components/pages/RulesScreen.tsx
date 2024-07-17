import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RulesScreen.module.css';
import {
    RulesScreenParagraph,
    RulesScreenSubtitle,
    RulesScreenNumber,
} from '../specific/';
import { rulesScreenData as data } from '../../constants';
const {
    title,
    objectiveSubtitle,
    objectiveDescription,
    howToPlaySubtitle,
    howToPlayDescriptions,
} = data;

const RulesScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <div className={`${styles.inner} ${styles.isFirstInner}`}>
                    <RulesScreenSubtitle>{objectiveSubtitle}</RulesScreenSubtitle>
                    <RulesScreenParagraph>{objectiveDescription}</RulesScreenParagraph>
                </div>
                <div className={styles.inner}>
                    <RulesScreenSubtitle>{howToPlaySubtitle}</RulesScreenSubtitle>
                    <ol className={styles.listContainer}>
                        {howToPlayDescriptions.map((description, index) => (
                            <li key={index} className={styles.listItem}>
                                <RulesScreenNumber>{(index + 1).toString()}</RulesScreenNumber>
                                <RulesScreenParagraph>{description}</RulesScreenParagraph>
                            </li>
                        ))}
                    </ol>
                </div>
                <Link to='/'>
                    <button className={styles.backButton}>
                        <img src='./images/confirm.svg' alt='' width={28} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RulesScreen;
