export const musicActions = {
    MUSIC_LOAD_LIKE_LIST: "music_load_like_list",
    MUSIC_DATA_UPDATE:"music_data_update",
    MUSIC_PLAY:"music_play",
    loadLikeList: (data) => ({
        type: musicActions.MUSIC_LOAD_LIKE_LIST,
        payload: data
    }),
    playMusic:(data)=>({
        type: musicActions.MUSIC_PLAY,
        payload: data
    }),
    dataUpdate: (data) => ({
        type: musicActions.MUSIC_DATA_UPDATE,
        payload: data
    })
};