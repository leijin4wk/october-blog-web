import { indexActions } from './action';
import { call, fork, put, take,select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {findArticleByPage,findAllCategory} from './service'
function* loadData() {
    try {
        yield put(showLoading());
        const {pageNum,pageSize,categoryId}= yield select(state => state.index);
        let articlePage=yield call(findArticleByPage,{pageNum,pageSize,categoryId});
        let categoryList=yield call(findAllCategory);
        yield put(indexActions.dataUpdate({articleList:articlePage.content,categoryList:categoryList}));
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
        yield take(indexActions.INDEX_LOAD_DATA);
        yield fork(loadData);
    }
}


export const indexSaga = [
    fork(watchLoadData),
];
