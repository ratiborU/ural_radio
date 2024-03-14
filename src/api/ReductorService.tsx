import axios from "axios";
import { IReductor } from "../types/types";


export default class ReductorService {
  static async getAllReductors(): Promise<IReductor[]> {
    const response =  await axios.get('https://journa-token.onrender.com/council/members/get/all');
    return response["data"]["data"];
  }


  static async getReductorById(id: string | undefined): Promise<IReductor> {
    const response =  await axios.get(`https://journa-token.onrender.com/council/members/get/${id}`);
    return response["data"]["member"];
  }
}