import React, { useEffect, useState } from 'react'
import Table from './Table'
import classes from "../css/Admin.module.css"


const Admin = () => {
  const { body, column, left, right, section } = classes

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
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
          <Table users={users} ></Table>
        </div>
      </div>
    </>
  )
}

export default Admin