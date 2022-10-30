import React from 'react';
import classes from '../css/StudentProfile.module.css'
import Image from '../images/loginimg2.jpg'
import Image1 from '../images/pexels-thisisengineering-3862130.jpg'

const StudentProfile = ()=>{
    return (
        <>
        <div className={classes.body}>
        <div className={classes.studentprofilebody}>
            <section className={classes.userprofile}>
                <h1 className={classes.heading}>User Profile</h1>
                <div className={classes.info}>
                    <div className={classes.user}>
                    <img src={Image} alt=""/>
                    <h3>shaikh anas</h3>
                    <p>student</p>
                    <a href="/usprofile" className={classes.inlinebtn}>update profile</a>
                    </div>
                </div>
            </section>
            <section className={classes.courses}>
                <h1 className={classes.heading}>Your courses</h1>
                <div className={classes.boxcontainer}>
                     <div className={classes.box}>
                         <div className={classes.tutor}>
                             <img src={Image} alt="" />
                             <div className={classes.info}>
                               <h3>john deo</h3>
                               <span>21-10-2022</span>
                             </div>
                         </div>
                         <div className={classes.thumb}>
                             <img src={Image} alt="" />
                             <span>10 videos</span>
                         </div>
                         <h3 className={classes.title}>complete HTML tutorial</h3>
                         <a href="" className={classes.inlinebtn}>view playlist</a>
                     </div>
                     <div className={classes.box}>
                         <div className={classes.tutor}>
                             <img src={Image1} alt="" />
                             <div className={classes.info}>
                               <h3>john deo</h3>
                               <span>21-10-2022</span>
                             </div>
                         </div>
                         <div className={classes.thumb}>
                             <img src={Image1} alt="" />
                             <span>10 videos</span>
                         </div>
                         <h3 className={classes.title}>complete HTML tutorial</h3>
                         <a href="" className={classes.inlinebtn}>view playlist</a>
                     </div>
                     <div className={classes.box}>
                         <div className={classes.tutor}>
                             <img src={Image1} alt="" />
                             <div className={classes.info}>
                               <h3>john deo</h3>
                               <span>21-10-2022</span>
                             </div>
                         </div>
                         <div className={classes.thumb}>
                             <img src={Image1} alt="" />
                             <span>10 videos</span>
                         </div>
                         <h3 className={classes.title}>complete HTML tutorial</h3>
                         <a href="" className={classes.inlinebtn}>view playlist</a>
                     </div>
                </div>
            </section>
         </div>
        </div>
        </>
    )
}

export default StudentProfile