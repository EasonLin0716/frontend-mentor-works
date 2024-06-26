import { MainMenuScreen, GameScreen, RulesScreen } from './components/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainMenuScreen />,
    },
    {
        path: '/game',
        element: <GameScreen />,
    },
    {
        path: '/rules',
        element: <RulesScreen />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
