import axios from 'axios'
export async function getMusicCookie() {
    try {
        let res = await axios.get("/api/music/getCookie");
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}
export async function getLikeList(accountId) {
    try {
        let res = await axios.get("/music/likelist",{params:{uid:accountId}});
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export async function getSongDetailList(ids) {
    try {
        let res = await axios.get("/music/song/detail?",{params:{ids:ids}});
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export async function getSongUrl(id) {
    try {
        let res = await axios.get("/music//song/url?",{params:{id:id}});
        return res.data
    } catch (err) {
        console.log(err)
    }
}