export const musicActions = {
    MUSIC_LOAD_LIKE_LIST: "music_load_like_list",
    MUSIC_DATA_UPDATE:"music_data_update",
    loadLikeList: (data) => ({
        type: musicActions.MUSIC_LOAD_LIKE_LIST,
        payload: data
    }),

    dataUpdate: (data) => ({
        type: musicActions.MUSIC_DATA_UPDATE,
        payload: data
    })
};