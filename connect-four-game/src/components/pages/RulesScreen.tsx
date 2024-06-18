import React from 'react';
import styles from './RulesScreen.module.css';

const RULES_TITLE = 'rules';
const OBJECTIVE_SUBTITLE = 'objective';
const OBJECTIVE_DESCRIPTION = 'Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).';
const HOW_TO_PLAY_SUBTITLE = 'how to play';
const HOW_TO_PAY_DESCRIPTIONS = [
    'Red goes first in the first game.',
    'Players must alternate turns, and only one disc can be dropped in each turn.',
    'The game ends when there is a 4-in-a-row or a stalemate.',
    'The starter of the previous game goes second on the next game.',
];

const RulesScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{RULES_TITLE}</h1>
                <div className={`${styles.inner} ${styles.isFirstInner}`}>
                    <h2 className={styles.subtitle}>{OBJECTIVE_SUBTITLE}</h2>
                    <p className={styles.paragraph}>{OBJECTIVE_DESCRIPTION}</p>
                </div>
                <div className={styles.inner}>
                    <h2 className={styles.subtitle}>{HOW_TO_PLAY_SUBTITLE}</h2>
                    <ol>
                        {HOW_TO_PAY_DESCRIPTIONS.map((description, index) => (
                            <li key={index} className={styles.paragraph}>{description}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RulesScreen;
