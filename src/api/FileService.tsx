import axios from "axios";

// возможны ошибки
export default class FileService {
  static async getImageLinkById(id: string | undefined) {
    const response =  await axios.get(`https://journa-token.onrender.com/files/get/${id}?download=false`)
      .then(() => {
        return `https://journa-token.onrender.com/files/get/${id}?download=false`;
      }).catch((error: Error) => {
        throw new Error(error.message);
      }); 
    return response;
    // return '';
    // return `https://journa-token.onrender.com/files/get/${id}?download=false`;
  }


  static async getFileLinkById(id: string | undefined) {
    return `https://journa-token.onrender.com/files/get/${id}?download=true`;
  }


  static async getFileById(id: string | undefined) {
    try {
      await axios.get(`https://journa-token.onrender.com/files/get/${id}?download=false`);
    } catch (e) {
      return '';
    }
    return `https://journa-token.onrender.com/files/get/${id}?download=false`;
  }
}