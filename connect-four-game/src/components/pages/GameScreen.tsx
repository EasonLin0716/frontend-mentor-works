import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './GameScreen.module.css';
import {
    GameScreenFooter,
    GameScreenHeader,
    GameScreenContent,
    GameScreenMenu,
} from '../specific';
import { GAME_STATES } from '../../constants';

const GameScreen: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [gameState, setGameState] = useState(GAME_STATES.isReady);
    const nodeRef = useRef<HTMLDivElement>(null);
    const restartGameHandler = () => {
        setGameState(GAME_STATES.isReady);
    };
    return (
        <>
            <div className={styles.wrapper}>
                <GameScreenHeader
                    openMenu={() => setMenuIsOpen(true)}
                    resetGameState={() => restartGameHandler()}
                />
                <GameScreenContent
                    gameState={gameState}
                    startGame={() => setGameState(GAME_STATES.isPlaying)}
                    resetGameState={() => setGameState(GAME_STATES.isReady)}
                    setWinner={(winner: number) => { setGameState(winner === 1 ? GAME_STATES.player1IsWin : GAME_STATES.player2IsWin) }}
                    setGameToDraw={() => setGameState(GAME_STATES.isDraw)}
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
