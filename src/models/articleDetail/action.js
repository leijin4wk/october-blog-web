export const articleDetailActions = {
    ARTICLE_DETAIL_LOAD_DATA: 'ARTICLE_DETAIL_LOAD_DATA',
    ARTICLE_DETAIL_DATA_UPDATE: "ARTICLE_DETAIL_DATA_UPDATE",
    loadData: (data) => ({
        type: articleDetailActions.ARTICLE_DETAIL_LOAD_DATA,
        payload: data
    }),
    dataUpdate: (data) => ({
        type: articleDetailActions.ARTICLE_DETAIL_DATA_UPDATE,
        payload: data
    })
};