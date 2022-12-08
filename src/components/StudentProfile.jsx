import React from 'react';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from '../css/StudentProfile.module.css'
import Image from '../images/loginimg2.jpg'
import Image1 from '../images/pexels-thisisengineering-3862130.jpg'
import { connect } from 'react-redux'


const StudentProfile = ({ userDetails })=>{
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
        <div className={classes.body}>
        <div className={classes.studentprofilebody}>
            <section className={classes.userprofile}>
                <h1 className={classes.heading}>User Profile</h1>
                <div className={classes.userprofilecontainer}>
                <div className={classes.userdetails}>
                  <div className={classes.user}>
                    <img src={Image} alt=""/>
                    <h2>Kenneth Valdez</h2>
                    <p>student</p>
                    <p>Bay Area, San Francisco, CA</p>
                    {/* <div className={classes.userbuttons}>
                    <a href="/usprofile" className={classes.userinlinebtn}>follow</a>
                    <a href="/usprofile" className={classes.userinlinebtn}>like</a>
                    </div> */}
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.user}>
                        <div className={classes.rowdetails}>
                        <h6>FIRST NAME</h6>
                        <h6>{userDetails.fname} </h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>LAST NAME</h6>
                        <h6>{userDetails.lname}</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>CONTACT DETAILS</h6>
                        <h6>{userDetails.phnumber}</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>NUMBER OF COURSES ENROLLED</h6>
                        <h6>6</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>NUMBER OF ACTIVE LEARNING DAYS</h6>
                        <h6>24</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>PLACE OF STUDY</h6>
                        <h6>IIIT SRICITY</h6>
                        </div>
                        <Link  to={`/usprofile`} className={classes.inlinebtn}>update profile</Link> 
                    {/* <img src={Image} alt=""/>
                    <h3>shaikh anas</h3>
                    <p>student</p>
                    <a href="/usprofile" className={classes.inlinebtn}>update profile</a> */}
                    </div>
                </div>
                </div>
            </section>
            <div className={classes.courses}>
                <h1 className={classes.heading}>Your courses</h1>
                <div className={classes.boxcontainer}>
                    {
                        courses.map(course =><div className={classes.box} key={course.id}>
                            <div className={classes.thumb}>
                            <img src={Image} alt="" />
                                {/* <span>10 videos</span> */}
                            </div>
                            <Link  to={`#`} className={classes.title}>{course.title}</Link>
                            <h3 className={classes.universityname}>{course.categorydb}</h3>
                            <h5 className={classes.description}>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
                            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit ipsum dolor sit </h5>
                            <div className={classes.coursetype}>
                                <h5>Course</h5>
                                <h5>Price: {course.price}</h5> 
                            </div>
                            <div className={classes.enroll}><Link  to={`/courses/1`} className={classes.inlinebtn}>Continue</Link></div>
                            {/* <a href="" className={classes.inlinebtn}>view playlist</a> */}
                        </div>)
                    }

                </div>
            </div>
         </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
      userDetails: state.learnpedia
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({})
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile)