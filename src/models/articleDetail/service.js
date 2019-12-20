import axios from "axios";

export async function findArticleDetailById(param) {
    try {
        let res = await axios.get("/api/article/search/"+param.articleId);
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}