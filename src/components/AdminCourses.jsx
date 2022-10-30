import React, { useEffect, useState } from 'react'
import classes from "../css/Admin.module.css"
import CoursesTable from './CoursesTable'

const Admin = () => {
  const { body, column, left, right, section } = classes

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data)
      });
  }, [])

  return (
    <>

      <div className={body}>
        <div className={`${column} ${left}`}>
        <a style={{"textDecoration": "none"}} href='/admin'><div className={section}>Users</div></a>
        <a style={{"textDecoration": "none"}} href="/admin/courses"><div className={section}>Courses</div></a>
        </div>
        <div className={`${column} ${right}`}>
          <CoursesTable courses={courses} ></CoursesTable>
        </div>
      </div>
    </>
  )
}

export default Admin