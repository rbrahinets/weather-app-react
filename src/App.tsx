import {ReactElement, useState} from 'react';
import './App.css';

const App: () => ReactElement | null = () => {
    const [city, setCity] = useState('');

    return (
        <div className='App'>
            <input
                type="text"
                value={city}
            />
            <button>
                Add
            </button>
        </div>
    );
}

export default App;
