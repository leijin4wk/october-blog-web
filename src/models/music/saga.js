import {musicActions} from './action';
import {call, fork, put, take, select} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {getMusicCookie, getLikeList, getSongDetailList, getSongUrl,getLyric} from './service'

function* loadLikeListData() {
    try {
        yield put(showLoading());
        let {accountId} = yield select(state => state.music);
        if (accountId === "") {
            let data = yield call(getMusicCookie);
            accountId = data;
            yield put(musicActions.dataUpdate({
                accountId: data
            }));
        }
        let likeListData = yield call(getLikeList, accountId);
        let detailListData = yield call(getSongDetailList, likeListData.ids.join(","));
        let songsList = [];
        detailListData.songs.forEach(item => {
            let arList = [];
            item.ar.forEach(i => {
                arList.push(i.name)
            });
            songsList.push({
                id: item.id,
                name: item.name,
                arName: arList.join(","),
                picUrl: item.al.picUrl
            })
        });
        yield put(musicActions.dataUpdate({
            likeList: songsList,
            currentPlayItem: songsList[0]
        }));
    } catch (error) {
        console.log(error)
    } finally {
        yield put(hideLoading())
    }
}

function* playMusic(data) {
    let songUrlData = yield call(getSongUrl, data.id);
    let lyricData= yield call(getLyric,data.id);
    let result={
        songUrl:songUrlData.data[0].url,
        lyric:lyricData.lrc.lyric
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
