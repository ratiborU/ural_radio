import image1 from "../assets/editors/editor1.jpeg";
import image2 from "../assets/editors/editor2.jpeg";
import image3 from "../assets/editors/editor3.jpeg";
import image4 from "../assets/editors/editor4.jpeg";
import image5 from "../assets/editors/editor5.jpeg";
import image6 from "../assets/editors/editor6.jpeg";
// import image7 from "../assets/editors/editor7.jpg";
// import image8 from "../assets/editors/editor8.jpg";
// import image9 from "../assets/editors/editor9.jpg";
// import image10 from "../assets/editors/editor10.jpg";
// import image11 from "../assets/editors/editor11.jpg";
// import image12 from "../assets/editors/editor12.jpg";
// import image13 from "../assets/editors/editor13.jpg";
// import image14 from "../assets/editors/editor14.jpg";
// import image15 from "../assets/editors/editor15.jpg";
// import image16 from "../assets/editors/editor16.jpg";
// import image17 from "../assets/editors/editor17.jpg";
// import image18 from "../assets/editors/editor18.jpg";
// import image19 from "../assets/editors/editor19.jpg";
// import image20 from "../assets/editors/editor20.jpg";


import tom7n3image from '../assets/issues/tom7n3.jpeg';
import tom7n2image from '../assets/issues/tom7n2.jpeg';
import tom7n1image from '../assets/issues/tom7n1.jpeg';

// import tom6n4image from '../assets/issues/tom6n4.jpeg';
// import tom6n3image from '../assets/issues/tom6n3.jpeg';
// import tom6n2image from '../assets/issues/tom6n2.jpeg';
// import tom6n1image from '../assets/issues/tom6n1.jpeg';

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

const files = {
  "1": image1,
  "2": image2,
  "3": image3,
  "4": image4,
  "5": image5,
  "6": image6,
  "7": tom7n3image,
  "8": tom7n2image,
  "9": tom7n1image,

  "65996632fe7f2cec36368d6a": image1,
  "65996ba0fe7f2cec36368d6b": image2,
  "6599702dfe7f2cec36368d6c": image3,
  "65997052fe7f2cec36368d6d": image4,

}

const getFileById = (id: string) => {
  return files[id];
}


export { getFileById }