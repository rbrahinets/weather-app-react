import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Search/>
        </>
    );
}

export default App;
