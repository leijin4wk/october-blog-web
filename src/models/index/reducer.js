import { Record } from 'immutable';
import { indexActions } from './action';

export const indexState = new Record({
    pageNum:0,
    pageSize:10,
    totalPages:0,
    total:0,
    categoryId:"",
    articleList:[],
    categoryList:[]
});

export function indexReducer(state = new indexState(), {payload, type}) {
    switch (type) {
        case indexActions.INDEX_DATA_UPDATE:
            return state.merge({
                ...payload
            });
        default:
            return state;
    }
}
