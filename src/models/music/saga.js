import { musicActions } from './action';
import { call, fork, put, take,select } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {getMusicCookie,getLikeList,getSongDetailList,getSongUrl} from './service'
function* loadLikeListData() {
    try {
        yield put(showLoading());
        let {accountId}= yield select(state => state.music);
        if (accountId===""){
            let data=yield call(getMusicCookie);
            accountId=data;
            yield put(musicActions.dataUpdate({
                accountId:data
            }));
        }
      let likeListData=yield call(getLikeList,accountId);
       let detailListData=yield call(getSongDetailList,likeListData.ids.join(","));
        let songsList=[];
        detailListData.songs.forEach(item=>{
            let arList=[];
            item.ar.forEach(i=>{
                arList.push(i.name)
            });
            songsList.push({
                id:item.id,
                name:item.name,
                arName:arList.join(","),
                picUrl:item.al.picUrl
            })
        });
        yield put(musicActions.dataUpdate({
            likeList:songsList,
            currentPlayItem:songsList[0]
        }));
       //  console.log("detailListData",detailListData);
       // let songUrlData=yield call(getSongUrl,"472137697");
      //  console.log("songUrlData",songUrlData);
    } catch (error) {
        console.log(error)
    } finally {
        yield put(hideLoading())
    }
}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadLikeListData() {
    while (true) {
        let action= yield take(musicActions.MUSIC_LOAD_LIKE_LIST);
        yield fork(loadLikeListData,action.payload);
    }
}


export const musicSaga = [
    fork(watchLoadLikeListData)
];