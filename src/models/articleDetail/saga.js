import { articleDetailActions } from './action';
import { call, fork, put, take } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {findArticleDetailById} from './service'


function* loadData(data) {
    try {
        yield put(showLoading());
        let articleItem=yield call(findArticleDetailById,{articleId:data.id});
        yield put(articleDetailActions.dataUpdate({articleItem:articleItem}));
    } catch (error) {
        console.log(error)
    } finally {
        yield put(hideLoading())
    }
}


//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadData() {
    while (true) {
        const action = yield take(articleDetailActions.ARTICLE_DETAIL_LOAD_DATA);
        yield fork(loadData,action.payload);
    }
}


export const articleDetailSaga = [
    fork(watchLoadData),
];
