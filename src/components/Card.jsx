import React from 'react'


const Card2Data=[
  {
    image:"src/assets/image10.jpg",
    title:"Basics of Computer",
    Descriptio:"jshasdshjfsdhfvsdhjfvsdhjfvsdhfvs dhfvs dhcfsmdv csdgh"
  }
]
function Card2(Pops){
  return (
    <div  className='Card2' >
      <div className="image"><img src="src/assets/image10.jpg" alt="" /></div>
      <div className="title"><h1>Basics of Computer</h1></div>
      <div className="description"><h2>jshasdshjfsdhfvsdhjfvsdhjfvsdhfvs dhfvs dhcfsmdv csdgh</h2></div>
      <div className="enroll"><button>Enroll this course</button></div>
    </div>
  )
}
const Card = () => {
  return (
    <div className="card p-0">
      <Card2   />
      <Card2/>
      <Card2/>
      <Card2/>
      <Card2/>
      <Card2/>
      <Card2/>
    </div>
  )
}

export default Card
