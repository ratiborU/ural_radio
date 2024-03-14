import axios from "axios";
import { IIssue } from "../types/types";


export default class IssuesService {
  // Выпуски
  static async getAllIssues(): Promise<IIssue[]> {
    const response =  await axios.get('https://journa-token.onrender.com/editions/get/all')
      .then((response) => {
        return response["data"]["data"];
      }).catch(() => {
        // console.log(error);
        return [];
      }); 
    return response;
  }

  static async getIssueById(id: string | undefined): Promise<IIssue> {
    const response =  await axios.get(`https://journa-token.onrender.com/editions/get/${id}`)
      .then((response) => {
        return response["data"]["edition"];
      }).catch(() => {
        // console.log(error);
        return null;
      }); 
    return response;
  }

  static async getLastIssue(): Promise<IIssue> {
    const response =  await axios.get('https://journa-token.onrender.com/editions/get/all')
      .then((response) => {
        return response["data"]["data"][0];
      }).catch(() => {
        // console.log(error);
        return null;
      }); 
    return response;
  }
}