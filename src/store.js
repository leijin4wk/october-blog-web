import { applyMiddleware,createStore,compose  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    let middlewares = [];
    let storeEnhancers;
    if(process.env.NODE_ENV==='production'){
        storeEnhancers = compose(
            applyMiddleware(...middlewares,sagaMiddleware)
        );
    }else {
        storeEnhancers = compose(
            applyMiddleware(...middlewares, sagaMiddleware),
            (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f,
        );
    }


    const store = createStore(reducers, {} ,storeEnhancers);

    sagaMiddleware.run(sagas);

    return store;
}
