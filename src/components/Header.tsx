import {ReactElement} from 'react';
import './Header.css';

const Header: () => ReactElement | null = () => (
    <header className='header'>
        <h1>Weather</h1>
    </header>
);

export default Header;
