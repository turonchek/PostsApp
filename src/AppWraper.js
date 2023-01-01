import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './services/store';

const AppWraper = () => {
    return (
        <Provider store={store} >
            <App/>
        </Provider>
    );
}

export default AppWraper;
