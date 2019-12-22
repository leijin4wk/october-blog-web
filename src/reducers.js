import {combineReducers} from 'redux';
import {indexReducer} from './models/index/reducer';
import {articleDetailReducer} from './models/articleDetail/reducer'
import {musicReducer} from './models/music/reducer'
import {loadingBarReducer} from 'react-redux-loading-bar'

export default combineReducers({
    loadingBar: loadingBarReducer,
    index: indexReducer,
    articleDetail: articleDetailReducer,
    music:musicReducer
});
