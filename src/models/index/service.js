import axios from 'axios'
export async function findArticleByPage(param) {
    try {
        let res = await axios.get("/api/article/search",{ params:{...param}});
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}
export async function findAllCategory() {
    try {
        let res = await axios.get("/api/category/search");
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}