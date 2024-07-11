import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './GameScreenMenu.module.css';
import BigButton from '../common/BigButton';

interface GameScreenMenuProps {
    menuIsOpen: boolean;
    closeMenu: () => void;
    restartGame: () => void;
}

const GameScreenMenu = forwardRef<HTMLDivElement, GameScreenMenuProps>(
    ({ closeMenu, restartGame }, ref) => {
        return (
            <div ref={ref} className={styles.layer}>
                <div className={styles.menu}>
                    <h2 className={styles.title}>pause</h2>
                    <BigButton className={styles.continueGameBtn} onClick={closeMenu}>
                        continue game
                    </BigButton>
                    <BigButton className={styles.restartBtn} onClick={() => {
                        restartGame();
                        closeMenu();
                    }}>
                        restart
                    </BigButton>
                    <Link to='/'>
                        <BigButton className={styles.quitGameBtn}>quit game</BigButton>
                    </Link>
                </div>
            </div>
        );
    },
);

export default GameScreenMenu;
