import { all } from 'redux-saga/effects'
import { indexSaga } from './models/index/saga';
import {articleDetailSaga} from './models/articleDetail/saga'
import {musicSaga} from './models/music/saga'

export default function* sagas() {
    yield all([
        ...indexSaga,
        ...articleDetailSaga,
        ...musicSaga
    ]);
}
