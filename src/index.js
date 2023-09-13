import React from 'react';
import ReactDOM from 'react-dom/client';
// a component
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // store prop with our store as a value.
    <Provider store={store}>
        <App />
    </Provider>
);
