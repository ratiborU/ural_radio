import axios from "axios";
import { IArticle } from "../types/types";


export default class ArticleService {
  static async getAllArticles(): Promise<IArticle[]> {
    const response =  await axios.get('https://journa-token.onrender.com/articles/get/all'); 
    return response["data"]["data"];
  }


  static async getArticlesByIssueId(id: string | undefined): Promise<IArticle[]> {
    const response = await axios.get('https://journa-token.onrender.com/articles/get/all')
      .then(result => {
        return result;
      }).catch(error => {
        return error;
      }); 
    return response["data"]["data"].filter((item: IArticle) => item["editionId"] == id);
  }


  static async getArticleById(id: string | undefined): Promise<IArticle> {
    const response =  await axios.get(`https://journa-token.onrender.com/articles/get/${id}`); 
    return response["data"]["article"];
  }

}