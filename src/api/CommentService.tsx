import axios from "axios";
import { IComment } from "../types/types";


export default class CommentService {
  static async getAllComments(): Promise<IComment[]> {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"];
  }


  static async getCommentsByArticleId(id: string | undefined): Promise<IComment[]> {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"].filter((item: IComment) => item["articleId"] == id);
  }


  static async getApprovedCommentsByArticleId(id: string | undefined): Promise<IComment[]> {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"].filter((item: IComment) => item["articleId"] == id && item["isApproved"]);
  }


  static async getCommentById(id: string | undefined): Promise<IComment> {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"].filter((item: IComment) => item["id"] == id);
  }
  

  static async createComment(articleId: string | undefined = '', content: string) {
    const response = axios.post('https://journa-token.onrender.com/comments/create', {
      "articleId": articleId,
      "content": content,
      "date":"2003-11-01T12:00:00Z"
    }).then(result => {
      return result;
    });
    return response;
  }
}