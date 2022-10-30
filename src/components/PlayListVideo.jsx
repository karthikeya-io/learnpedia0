import React from 'react';
import classes from "../css/PlayListVideo.module.css"
import Image from "../images/coursesinfo.jpeg"

const PlayListVideo = ()=>{
    return(
        <>
        <div className={classes.body}>
        <div className={classes.playlistvideobody}>
        <div className={classes.sidebar}>
        <div className={classes.sidebarheader}> <h2 className={classes.sidebarheading}>Course Content</h2> </div>
        <div className={classes.sidenav}>
         <button className={classes.sidebardropdownbtn}>Section 2: The Field of Data Science - The Various Data Science Disciplines </button>
         <i className = "fa fa-caret-down"></i>
         <div className={classes.dropdowncontainer}>
            <a href="#" className="">4. Data Science and Business Buzzwords: Why are there so Many?</a>
            <a href="#">5. What is the difference between Analysis and Analytics</a>
                  <a href="#">Continuing with BI, ML, and AI</a>
         </div>
        </div>
        <div className={classes.sidenav}>
         <button className={classes.sidebardropdownbtn}>Section 1: Part 1: Introduction </button>
         <i className = "fa fa-caret-down"></i>
         <div className={classes.dropdowncontainer}>
           <a href="#">1. A Practical Example: What You Will Learn in This Course</a>
           <a href="#">2. What Does the Course Cover</a>
           <a href="#">3. Download All Resources and Important FAQ</a>
         </div>
        </div>
        </div>
        </div>
        <section className={classes.watchvideo}>
            <div className={classes.videocontainer}>
                <div className={classes.video}>
                    <video src="" poster="images/post-1-1.png" id="video"></video>
                </div>
                <h3 className={classes.title}>complete HTML tutorial (part 01)</h3>
                <div className={classes.tutor}>
                    <img src={Image} alt="" />
                    <div>
                      <h3>john deo</h3>
                      <span>developer</span>
                    </div>
                </div>
                <form action="" method = "POST" enctype = "multipart/form-data"className={classes.flex}>
                    <a href="" className={classes.inlinebtn}>view playlist</a>
                    <button><i class="far fa-heart"></i><span>like</span></button>
                </form>
                <p className={classes.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
                </p>
            </div>
        </section>
        </div>
        </>
    )
}

export default PlayListVideo