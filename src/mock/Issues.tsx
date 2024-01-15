// import tom7n3image from '../assets/issues/tom7n3.jpg';
// import tom7n2image from '../assets/issues/tom7n2.jpg';
// import tom7n1image from '../assets/issues/tom7n1.jpg';

// import tom6n4image from '../assets/issues/tom6n4.jpg';
// import tom6n3image from '../assets/issues/tom6n3.jpg';
// import tom6n2image from '../assets/issues/tom6n2.jpg';
// import tom6n1image from '../assets/issues/tom6n1.jpg';

// import tom5n4image from '../assets/issues/tom5n4.jpg';
// import tom5n3image from '../assets/issues/tom5n3.jpg';
// import tom5n2image from '../assets/issues/tom5n2.jpg';
// import tom5n1image from '../assets/issues/tom5n1.jpg';

// import tom4n4image from '../assets/issues/tom4n4.jpg';
// import tom4n3image from '../assets/issues/tom4n3.jpg';
// import tom4n2image from '../assets/issues/tom4n2.jpg';
// import tom4n1image from '../assets/issues/tom4n1.jpg';

// import tom3n4image from '../assets/issues/tom3n4.jpg';
// import tom3n3image from '../assets/issues/tom3n3.jpg';
// import tom3n2image from '../assets/issues/tom3n2.jpg';
// import tom3n1image from '../assets/issues/tom3n1.jpg';

// import tom2n4image from '../assets/issues/tom2n4.jpg';
// import tom2n3image from '../assets/issues/tom2n3.jpg';
// import tom2n2image from '../assets/issues/tom2n2.jpg';
// import tom2n1image from '../assets/issues/tom2n1.jpg';

// import tom1n1image from '../assets/issues/tom1n1.jpg';

const issuesRight = {
  "data": [
    {
      "id": "6581abb6212da88cc694db24",
      "title": {
        "Ru": "том 7, №3",
        "Eng": "test edition"
      },
      "filePathId": "656ce85d55609fec52997849",
      "coverPathId": "7",
      "videoPathId": "000000000000000000000000",
      "date": "2003-11-01T12:00:00Z"
    },
    {
      "id": "2",
      "title": {
        "Ru": "том 7, №2",
        "Eng": "test edition"
      },
      "filePathId": "656ce85d55609fec52997849",
      "coverPathId": "8",
      "videoPathId": "000000000000000000000000",
      "date": "2003-11-01T12:00:00Z"
    },
    {
      "id": "3",
      "title": {
        "Ru": "том 7, №1",
        "Eng": "test edition"
      },
      "filePathId": "656ce85d55609fec52997849",
      "coverPathId": "9",
      "videoPathId": "000000000000000000000000",
      "date": "2003-11-01T12:00:00Z"
    }
  ]
}

const getAllIssues = () => {
  return issuesRight;
}

const getIssueById = (id: string) => {
  return issuesRight.data.filter((item) => item.id == id)[0];
}


export { getAllIssues, getIssueById };