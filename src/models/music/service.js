import axios from 'axios'
export async function getLikeList() {
    try {
        let res = await axios.get("/api/music/getLikeList");
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}

export async function getSongUrl(ids) {
    try {
        let res = await axios.get("/api/music/getSongUrl?",{params:{id:ids}});
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}
