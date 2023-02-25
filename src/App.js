import Course from './Course';
import './App.css';
import { useState } from 'react';


const getCourseRandom = ()=>{
  const course = ['Angular', 'Bootstrap', 'Ccsharp', 'Komple']
  return course[Math.floor(Math.random()*course.length)]

}

function App() {
  const [courses , setCourses] = useState([])
  
  const handleClick = ()=>{

    setCourses([...courses , getCourseRandom()])

  }

  const courseList = courses.map((course , index)=>{
    return  <Course key ={index} courseName = {course}  />
  })

  return (
    <div className="App">

      <button className='appButon' onClick={handleClick} >Kurs Ekle</button>
      <div className='courseList' >{courseList}</div>
      
     
    </div>
  );
}

export default App;
