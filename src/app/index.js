import React, { memo } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Root from './components/Root';
import DataLoader from './components/DataLoader';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

const EntryPoint = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/'>
                    <DataLoader />
                    <Root />
                </Route>
            </Switch>
        </HashRouter>
    </Provider>
);

export default memo(EntryPoint);
