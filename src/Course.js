import React from 'react'
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Komple from './images/kompleweb.jpg'
import './Course.css'

const courseMap ={
    Angular : Angular ,
    Bootstrap : Bootstrap , 
    Ccsharp : Ccsharp ,
    Komple : Komple
}

const Course = ({courseName}) => {
    console.log(courseMap[courseName])
  return (
    <div>
      <img className='image' src={courseMap[courseName]} alt='course' />
    </div>
  )
}

export default Course
