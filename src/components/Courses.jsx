import React, { useEffect, useState } from 'react'
import Card from './Card'
import classes from '../css/Courses.module.css'


const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/courses')
            .then((response) => response.json())
            .then((data) => {
              setCourses(data)
            });
    }, [])
    console.log(courses);
  return (
    <>
      <div className={classes.coursesBody}>
        <div className={classes.cardGrid}>
          {courses.map(course => {
            return (
              <Card key={course.id} {...course} />
            )
          })}
          
        </div>
      </div>
    </>
  )
}

export default Courses