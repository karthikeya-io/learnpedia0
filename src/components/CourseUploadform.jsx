import React, { useState } from 'react'
import classes from '../css/CourseUploadform.module.css'
import Img1 from '../images/pexels-thisisengineering-3862130.jpg'


const CourseUploadform = () => {

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
    

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    
    
      const submitHandler = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formDetails))
        console.log(formDetails);
        postData('http://localhost:4000/courses', formDetails)
          .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
        setFormDetails({});
      }



    return (
        <>
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes.imageBox}>
                            <img src={Img1} alt="" />
                        </div>
                        <form action="#">
                            <div className={classes.topic}>Create a new Course</div>
                            <div className={classes.inputBox}>
                                <input onChange={changeHandler} name="title" type="text" value={formDetails.title || ""} required />
                                <label>Enter title of the course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input onChange={changeHandler} type="number" name='price' value={formDetails.price || ""} required />
                                <label>Enter Price of the Course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <select onChange={changeHandler} name="categorydb" value={formDetails.categorydb || ""} aria-label="Default select example" required>
                                    <option value="">Select a Category</option>
                                    <option value="arts">Arts</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="sciences">Sciences</option>

                                </select>

                            </div>

                            <div  className={classes.messageBox}>
                                <textarea onChange={changeHandler} minlength="125"   name='desc' value={formDetails.desc || ""}>
                                </textarea>
                                <label>Enter description of the course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input onClick={submitHandler} type="submit" value="Create" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseUploadform