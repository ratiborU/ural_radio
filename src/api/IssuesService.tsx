import { getAllIssues, getIssueById } from "../mock/Issues"
import { getAllReductors } from "../mock/reductors";
import { getFileById } from "../mock/files";
import { getAllArticles, getArticlesByIssueId, getArticleById } from "../mock/articles";
import { getAllComments, getCommentsByArticleId, getCommentById } from "../mock/comments";
import axios from "axios";


export default class IssuesService {
  // Выпуски
  static async getAllIssues() {
    const response =  await axios.get('https://journa-token.onrender.com/editions/get/all'); 
    return response["data"]["data"];
  }
  static async getIssueById(id) {
    const response =  await axios.get(`https://journa-token.onrender.com/editions/get/${id}`); 
    return response["data"]["edition"];
  }

  // static async getAllIssuesRight() {
  //   const response =  await axios.get('http://127.0.0.1:8000/editions/get/all'); 
  //   return response["data"]["data"];
  // }


  // Статьи
  static async getAllArticles() {
    const response =  await axios.get('https://journa-token.onrender.com/articles/get/all'); 
    return response["data"]["data"];
  }
  static async getArticlesByIssueId(id) {
    const response =  await axios.get('https://journa-token.onrender.com/articles/get/all'); 
    return response["data"]["data"].filter(item => item["editionId"] == id);
  }
  static async getArticleById(id) {
    const response =  await axios.get(`https://journa-token.onrender.com/articles/get/${id}`); 
    return response["data"]["article"];
  }

  
  // Комментарии
  static async getAllComments() {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"];
  }
  static async getCommentsByArticleId(id) {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"].filter(item => item["articleId"] == id && item["isApproved"]);
  }
  static async getCommentById(id) {
    const response =  await axios.get(`https://journa-token.onrender.com/comments/get/all?onlyApproved=false`); 
    return response["data"]["data"].filter(item => item["id"] == id);
  }
  static async createComment(articleId: string, content: string) {
    const response = await fetch('https://journa-token.onrender.com/comments/create', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "articleId": articleId,
        "content": content,
        "date":"2024-12-01T12:00:00Z"
    })
    }).then(result => {
      return result;
    });

    return response;
  }


  // Редакторы
  static async getAllReductors() {
    const response =  await axios.get('https://journa-token.onrender.com/council/members/get/all');
    return response["data"]["data"];
  }
  static async getReductorById(id) {
    const response =  await axios.get(`https://journa-token.onrender.com/council/members/get/${id}`);
    return response["data"]["member"];
  }

  // static async getAllReductorsRight() {
  //   const response =  await axios.get('http://127.0.0.1:8000/council/members/get/all');
  //   return response["data"]["data"];
  // }


  // Картинки редакторов
  // static async getAllReductorsImages() {
  //   const response =  await getAllReductorsImages();
  //   return response["data"];
  // }
  // static async getReductorImageById() {
  //   const response =  await getAllReductorsImages();
  //   return response["data"];
  // }


  // Файлы
  // static async getFileById(id) {
  //   const response =  await getFileById(id);
  //   return response;
  // }

  // static async getFileByIdRight(id) {
  //   const response =  await axios.get('http://127.0.0.1:8000/files/get/65996ba0fe7f2cec36368d6b?download=false');
  //   return response;
  // }
  static async getImageLinkById(id) {
    return `https://journa-token.onrender.com/files/get/${id}?download=false`;
  }
  static async getFileLinkById(id) {
    return `https://journa-token.onrender.com/files/get/${id}?download=true`;
  }
  static async getFileById(id) {
    try {
      await axios.get(`https://journa-token.onrender.com/files/get/${id}?download=false`);
    } catch (e) {
      console.log(e);
      return '';
    }
    return `https://journa-token.onrender.com/files/get/${id}?download=false`;
  }
}