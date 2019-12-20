import { Record } from 'immutable';
import { articleDetailActions } from './action';

export const articleDetailState = new Record({
    articleItem:{}
});

export function articleDetailReducer(state =  new articleDetailState(), {payload, type}) {
    switch (type) {
        case articleDetailActions.ARTICLE_DETAIL_DATA_UPDATE:
            return state.merge({
                ...payload
            });
        default:
            return state;
    }
}
