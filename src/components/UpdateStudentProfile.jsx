import React from 'react';
import  { useState } from 'react'
import classes from '../css/UpdateStudentProfile.module.css';

const UpdateStudentProfile = ()=>{

const [formDetails, setFormDetails] = useState({})
  const changeHandler = (event) => {
    let name = event.target.name;
    setFormDetails((prev) => {
      return (
        {
          ...prev,
          [name]: event.target.value
        }
      )
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formDetails);
    setFormDetails({});
  }

    return (
        <>
        <div className={classes.body}>
            <section className={classes.studentprofilebody}>
                <section className={classes.formcontainer}>
                <form action="#" onSubmit={submitHandler} encType="multipart/form-data">
                <h3>update profile</h3>
                <p>update name</p>
                <input onChange={changeHandler} type="text" name="name" placeholder="shaikh anas" maxLength="50" className={classes.box}/>
                <p>update email</p>
               <input onChange={changeHandler} type="email" name="email" placeholder="shaikh@gmail.come" maxLength="50" className={classes.box}/>
               <p>previous password</p>
               <input onChange={changeHandler} type="password" name="old_pass" placeholder="enter your old password" maxLength="20" className={classes.box}/>
               <p>new password</p>
               <input onChange={changeHandler} type="password" name="new_pass" placeholder="enter your old password" maxLength="20" className={classes.box}/>
               <p>confirm password</p>
               <input onChange={changeHandler} type="password" name="c_pass" placeholder="confirm your new password" maxLength="20" className={classes.box}/>
               <p>update pic</p>
               <input onChange={changeHandler} type="file" accept="image/*" className={classes.box}/>
               <input onChange={changeHandler} type="submit" value="update profile" name="submit" className={classes.btn}></input>
                </form>
                </section>
            </section>
        </div>
        </>
    )
}

export default UpdateStudentProfile