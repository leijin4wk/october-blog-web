import { applyMiddleware,createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
//import logger from "redux-logger";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, applyMiddleware(
        sagaMiddleware,
        // logger
    ));

    sagaMiddleware.run(sagas);

    return store;
}
