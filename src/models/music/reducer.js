import { Record } from 'immutable';
import { musicActions } from './action';

export const  musicState = new Record({
    likeList:[],
    currentPlayItem:{}
});

export function musicReducer(state = new musicState(), {payload, type}) {
    switch (type) {
        case musicActions.MUSIC_DATA_UPDATE:
            return state.merge({
                ...payload
            });
        default:
            return state;
    }
}
