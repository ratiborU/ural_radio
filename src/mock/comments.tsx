const comments = {
  "data": [
      {
          "id": "1",
          "articleId": "1",
          "content": {
              "Ru": "первый комментарий",
              "Eng": "&&&34ke g"
          },
          "date": "2003-11-01T12:00:00Z",
          "isApproved": true
      },
      {
          "id": "1",
          "articleId": "1",
          "content": {
              "Ru": "второй комментарий",
              "Eng": "example example пример!"
          },
          "date": "2003-11-01T12:00:00Z",
          "isApproved": true
      }
  ]
}

const getAllComments = () => {
  return comments;
}

const getCommentsByArticleId = (id: string) => {
  return comments.data.filter(item => item["articleId"] == id);
}

const getCommentById = (id: string) => {
  return comments.data.filter(item => item["id"] == id)[0];
}


export { getAllComments, getCommentsByArticleId, getCommentById };