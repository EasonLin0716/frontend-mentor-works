import { MainMenuScreen, GameScreen, RulesScreen } from './components/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter(
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
    {
        basename: '/frontend-mentor-works/connect-four-game/dist'
    }
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
