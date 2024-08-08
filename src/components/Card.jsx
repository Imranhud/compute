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

const cardData = [
  {
    image: "001.jpg",
    title: "Basics of Computer",
    description: "Learn the fundamentals of computing, including hardware, software, and essential skills."
  },
  {
    image: "0022.jpg",
    title: "Arabic Computing",
    description: "Start your Arabic Computing journey with this beginner-friendly course."
  },
  {
    image: "002.jpg",
    title: "Web Development",
    description: "Build modern websites with HTML, CSS, and JavaScript."
  },
  {
    image: "src/assets/003.jfif",
    title: "Use of Internet",
    description: "Dive into modern networking."
  },
  {
    image: "src/assets/004.jfif",
    title: "Artificial Inteligence",
    description: "Explore the basics of AI."
  },
  {
    image: "src/assets/005.jfif",
    title: "The Whole Tech",
    description: "Learn how to access every area of technology."
  },
  {
    image: "src/assets/006.jfif",
    title: "Crypto Master Class",
    description: "Understand the basic of Crypto and Financial Market."
  }
];

const Card = () => {
  return (
    <div className="card p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardData.map((course, index) => (
        <Card2
          key={index}
          image={course.image}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  );
}

export default Card;

const Card2 = ({ image, title, description }) => {
  return (
    <div className='Card2 border  m-4 rounded-lg shadow-lg '>
      <div className="image mb-4">
        <img src={image} alt={title} className=" h-50% rounded"  id="imgage"/>
      </div>
      <div className="title mb-2">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="description mb-4">
        <h2 className="text-gray-600">{description}</h2>
      </div>
      <div className="enroll">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enroll this course</button>
      </div>
    </div>
  );
}


