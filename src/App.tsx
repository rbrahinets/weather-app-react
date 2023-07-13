import {ReactElement} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

const App: () => ReactElement | null = () => {
    return (
        <>
            <Header/>
            <Search/>
        </>
    );
}

export default App;
