import { indexActions } from './action';
import { call, fork, put, take,select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {findArticleByPage,findAllCategory} from './service'
function* loadData(data) {
    try {
        yield put(showLoading());
        const {pageNum,pageSize,categoryId}= yield select(state => state.index);
        let param={
            pageNum:pageNum,pageSize:pageSize,categoryId:categoryId,...data
        };
        let articlePage=yield call(findArticleByPage,param);
        let categoryList=yield call(findAllCategory);
        yield put(indexActions.dataUpdate({
            articleList:articlePage.content,
            pageNum:articlePage.pageNum,
            pageSize:articlePage.pageSize,
            totalPages:articlePage.totalPages,
            total:articlePage.total,
            categoryId:articlePage.categoryId,
            categoryList:categoryList}));
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
       let action= yield take(indexActions.INDEX_LOAD_DATA);
        yield fork(loadData,action.payload);
    }
}


export const indexSaga = [
    fork(watchLoadData),
];
