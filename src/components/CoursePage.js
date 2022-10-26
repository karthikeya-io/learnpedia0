import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Nav from './Nav';
import '../css/CoursePage.css'


const CoursePage = () => {
    const { courseid } = useParams();
    return (
        <>
            <div className='coursepage-body'>CoursePage of id: {courseid}</div> 
        </>
    )
}

export default CoursePage