import {musicActions} from './action';
import {call, fork, put, take} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import { getLikeList,  getSongUrl} from './service'

function* loadLikeListData() {
    try {
        yield put(showLoading());
        let likeListData = yield call(getLikeList);
        yield put(musicActions.dataUpdate({
            likeList: likeListData,
            currentPlayItem: likeListData[0]
        }));
    } catch (error) {
        console.log(error)
    } finally {
        yield put(hideLoading())
    }
}

function* playMusic(data) {
    let songUrlData = yield call(getSongUrl, data.id);
    let result={
        songUrl:songUrlData.musicUrl,
        lyric:songUrlData.lyric
    };
    if(data.callback&&typeof data.callback === 'function'){
        data.callback(result)
    }
}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadLikeListData() {
    while (true) {
        let action = yield take(musicActions.MUSIC_LOAD_LIKE_LIST);
        yield fork(loadLikeListData, action.payload);
    }
}


function* watchPlayMusic() {
    while (true) {
        let action = yield take(musicActions.MUSIC_PLAY);
        yield fork(playMusic, action.payload);
    }
}


export const musicSaga = [
    fork(watchLoadLikeListData),
    fork(watchPlayMusic)
];
