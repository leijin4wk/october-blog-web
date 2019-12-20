export const indexActions = {
    INDEX_LOAD_DATA: 'INDEX_LOAD_DATA',
    INDEX_DATA_UPDATE: "INDEX_DATA_UPDATE",
    loadData: () => ({
        type: indexActions.INDEX_LOAD_DATA,
        payload: {}
    }),
    dataUpdate: (data) => ({
        type: indexActions.INDEX_DATA_UPDATE,
        payload: data
    })
};
