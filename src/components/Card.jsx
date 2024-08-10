// import React from 'react'


// const Card2Data=[
//   {
//     image:"src/assets/image10.jpg",
//     title:"Basics of Computer",
//     Descriptio:"jshasdshjfsdhfvsdhjfvsdhjfvsdhfvs dhfvs dhcfsmdv csdgh"
//   }
// ]
// function Card2(Pops){
//   return (
//     <div  className='Card2' >
//       <div className="image"><img src="src/assets/image10.jpg" alt="" /></div>
//       <div className="title"><h1>Basics of Computer</h1></div>
//       <div className="description"><h2>jshasdshjfsdhfvsdhjfvsdhjfvsdhfvs dhfvs dhcfsmdv csdgh</h2></div>
//       <div className="enroll"><button>Enroll this course</button></div>
//     </div>
//   )
// }
// const Card = () => {
//   return (
//     <div className="card p-0">
//       <Card2   />
//     </div>
//   )
// }

// export default Card


// C:\Users\hp\Desktop\quiz-app\src\assets\001.jpg
// import React from 'react';

// const cardData = [
//   {
//     image: "../../src/assets/001.jpg",
//     title: "Basics of Computer",
//     description: "Learn the fundamentals of computing, including hardware, software, and essential skills."
//   },
//   {
//     image: "../../src/assets/0022.jpg",
//     title: "Arabic Computing",
//     description: "Start your Arabic Computing journey with this beginner-friendly course."
//   },
//   {
//     image: "../../src/assets/002.jpg",
//     title: "Web Development",
//     description: "Build modern websites with HTML, CSS, and JavaScript."
//   },
//   {
//     image: "../../src/assets/003.jfif",
//     title: "Use of Internet",
//     description: "Dive into modern networking."
//   },
//   {
//     image: "../../src/assets/004.jfif",
//     title: "Artificial Inteligence",
//     description: "Explore the basics of AI."
//   },
//   {
//     image: "../../src/assets/005.jfif",
//     title: "The Whole Tech",
//     description: "Learn how to access every area of technology."
//   },
//   {
//     image: "../../src/assets/006.jfif",
//     title: "Crypto Master Class",
//     description: "Understand the basic of Crypto and Financial Market."
//   }
// ];

// const Card = () => {
//   return (
//     <div className="card p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {cardData.map((course, index) => (
//         <Card2
//           key={index}
//           image={course.image}
//           title={course.title}
//           description={course.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default Card;

// const Card2 = ({ image, title, description }) => {
//   return (
//     <div className='Card2 border  m-4 rounded-lg shadow-lg '>
//       <div className="image mb-4">
//         <img src={image} alt={title} className=" h-50% rounded"  id="imgage"/>
//       </div>
//       <div className="title mb-2">
//         <h1 className="text-xl font-bold">{title}</h1>
//       </div>
//       <div className="description mb-4">
//         <h2 className="text-gray-600">{description}</h2>
//       </div>
//       <div className="enroll">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enroll this course</button>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import image1 from '../assets/001.jpg'; // Adjust path as needed
import image2 from '../assets/0022.jpg'; // Adjust path as needed
import image3 from '../assets/002.jpg'; // Adjust path as needed
import image4 from '../assets/003.jfif'; // Adjust path as needed
import image5 from '../assets/004.jfif'; // Adjust path as needed
import image6 from '../assets/005.jfif'; // Adjust path as needed
import image7 from '../assets/006.jfif'; // Adjust path as needed
import image8 from '../assets/007.jfif'; // Adjust path as needed

const cardData = [
  {
    image: image1,
    title: "Basics of Computer",
    description: "Learn the fundamentals of computing, including hardware, software, and essential skills.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  },
  {
    image: image2,
    title: "Arabic Computing",
    description: "Start your Arabic Computing journey with this beginner-friendly course.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"

  },
  {
    image: image3,
    title: "Web Development",
    description: "Build modern websites with HTML, CSS, and JavaScript.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  },
  {
    image: image4,
    title: "Use of Internet",
    description: "Dive into modern networking.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  },
  {
    image: image5,
    title: "Artificial Intelligence",
    description: "Explore the basics of AI.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  },
  {
    image: image6,
    title: "The Whole Tech",
    description: "Learn how to access every area of technology.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  },
  {
    image: image8,
    title: "Magical Computing",
    description: "Understand the basics and enjoy the magical power of computers.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  },
  {
    image: image7,
    title: "Crypto Master Class",
    description: "Understand the basics of Crypto and Financial Market.",
    enroll:"https://www.cognitoforms.com/Technoligentform/ComputeCoursesForm"
  }
];

const Card2 = ({ image, title, description, enroll }) => {
  return (
    <div className='Card2 border m-4 rounded-lg shadow-lg'>
      <div className="image ">
        <img src={image} alt={title} className="h-50% " />
      </div>
      <div className="title mb-2">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="description mb-4">
        <h2 className="text-gray-600">{description}</h2>
      </div>
      <div className="enroll">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <a href={enroll}>Enroll this course</a>
        </button>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardData.map((course, index) => (
        <Card2
          key={index}
          image={course.image}
          title={course.title}
          description={course.description}
          enroll={course.enroll}
        />
      ))}
    </div>
  );
};

export default Card;


