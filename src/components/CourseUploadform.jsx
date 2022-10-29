import React from 'react'
import classes from '../css/CourseUploadform.module.css'
import Img1 from '../images/pexels-thisisengineering-3862130.jpg'

const CourseUploadform = () => {
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
                                <input type="text" required />
                                <label>Enter title of the course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input type="text" required />
                                <label>Enter Price of the Course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <select name="categorydb"  aria-label="Default select example" required>
                                    <option value="">Select a Category</option>
                                    <option value="arts">Arts</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="sciences">Sciences</option>

                                </select>

                            </div>

                            <div className={classes.messageBox}>
                                <textarea>
                                </textarea>
                                <label>Enter description of the course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input type="submit" value="Create" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseUploadform