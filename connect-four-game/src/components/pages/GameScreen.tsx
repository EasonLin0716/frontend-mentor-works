import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './GameScreen.module.css';
import {
    GameScreenFooter,
    GameScreenHeader,
    GameScreenMenu,
} from '../specific';

const GameScreen: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);
    const restartGameHandler = () => {
        console.log('Restarting game');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <GameScreenHeader
                    openMenu={() => setMenuIsOpen(true)}
                    restartGame={restartGameHandler}
                />
                <GameScreenFooter />
            </div>
            <CSSTransition
                in={menuIsOpen}
                timeout={300}
                classNames={{
                    enter: styles.menuEnter,
                    enterActive: styles.menuEnterActive,
                    exit: styles.menuExit,
                    exitActive: styles.menuExitActive,
                }}
                unmountOnExit
                nodeRef={nodeRef}
            >
                <GameScreenMenu
                    ref={nodeRef}
                    menuIsOpen={menuIsOpen}
                    closeMenu={() => setMenuIsOpen(false)}
                    restartGame={restartGameHandler}
                />
            </CSSTransition>
        </>
    );
};

export default GameScreen;
