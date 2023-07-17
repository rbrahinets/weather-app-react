import React from 'react';
import ReactDOM, {Root} from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import './utils/i18n'
import {store} from './state';
import App from './App';

const root: Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
