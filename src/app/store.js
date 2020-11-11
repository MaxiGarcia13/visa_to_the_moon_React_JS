import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from './middlewares/tools/logger';
import monitorReducerEnhancer from './middlewares/enhancers/monitorReducerEnhancer';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import dataImagesMiddleware from './middlewares/dataImages';

const configureStore = (preloadedState) => {
    const isDev = process.env.NODE_ENV === 'development';

    let middlewares = [thunkMiddleware, dataImagesMiddleware];
    let middlewaresEnhancers = [];

    if (isDev) {
        middlewares.push(loggerMiddleware);
        middlewaresEnhancers.push(monitorReducerEnhancer);
    }

    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, ...middlewaresEnhancers];

    const composedEnhancers = isDev ? composeWithDevTools(...enhancers) : compose(...enhancers);

    const store = createStore(rootReducers, preloadedState, composedEnhancers);

    return store;
};

export default configureStore;
