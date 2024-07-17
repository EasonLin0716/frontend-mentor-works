import { MainMenuScreen, GameScreen, RulesScreen } from './components/pages';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createHashRouter(
    [
        {
            path: '/',
            element: <MainMenuScreen />,
        },
        {
            path: '/game/:mode',
            element: <GameScreen />,
        },
        {
            path: '/rules',
            element: <RulesScreen />,
        },
    ],
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
