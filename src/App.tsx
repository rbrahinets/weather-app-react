import {ReactElement, useState} from 'react';
import './App.css';

const App: () => ReactElement | null = () => {
    const [city, setCity] = useState('');

    return (
        <div className='container'>
            <input
                className='input'
                type="text"
                value={city}
            />
            <button
                className='button'
            >
                Add
            </button>
        </div>
    );
}

export default App;
