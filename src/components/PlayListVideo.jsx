import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import classes from "../css/PlayListVideo.module.css"
import BackImg from "../images/vid-7.mp4"
import Image from "../images/loginimg2.jpg"
const PlayListVideo = ()=>{

    const [isdropdownactive1,setdropdownactive1] = useState(false)
    const [isdropdownactive2,setdropdownactive2] = useState(false)
    const [isdropdownactive3,setdropdownactive3] = useState(false)
    return(
        <>
        <div className={classes.body}>
        <div className={classes.playlistvideobody}>
            {/* <div> */}
        <div className={classes.sidebar}>
        <div className={classes.sidenav}>
        <div className={classes.sidebarheader}> <h3 className={classes.sidebarheading}>Course Content</h3> </div>
         <button className={classes.sidebardropdownbtn} onClick={() =>setdropdownactive2(prev=>!prev)}>Section 1: Part 1: Introduction </button>
         <div className={isdropdownactive2?classes.dropdowncontainer:''}>
           <Link to={`#`}>1. A Practical Example: What You Will Learn in This Course</Link>
           <Link to={`#`}>2. What Does the Course Cover</Link>
           <Link to={`#`}>3. Download All Resources and Important FAQ</Link>
         </div>
         <button className={classes.sidebardropdownbtn} onClick={() =>setdropdownactive1(prev=>!prev)}>Section 1: Part 1: Introduction </button>
         <div className={isdropdownactive1?classes.dropdowncontainer:''}>
         <Link to={`#`}>1. A Practical Example: What You Will Learn in This Course</Link>
           <Link to={`#`}>2. What Does the Course Cover</Link>
           <Link to={`#`}>3. Download All Resources and Important FAQ</Link>
         </div>
         <button className={classes.sidebardropdownbtn} onClick={() =>setdropdownactive3(prev=>!prev)}>Section 1: Part 1: Introduction </button>
         <div className={isdropdownactive3?classes.dropdowncontainer:''}>
         <Link to={`#`}>1. A Practical Example: What You Will Learn in This Course</Link>
           <Link to={`#`}>2. What Does the Course Cover</Link>
           <Link to={`#`}>3. Download All Resources and Important FAQ</Link>
         </div>
        </div>
        </div>
        {/* <div><h1>Section</h1></div> */}
        </div>
        <section className={classes.watchvideo}>
            <div className={classes.videocontainer}>
                <div className={classes.video}>
                    <video controls width="100%"
                    >
                      <source src={BackImg} type="video/mp4"></source>
                    </video>
                </div>
                <h3 className={classes.title}>complete HTML tutorial (part 01)</h3>
                <div className={classes.tutor}>
                    <img src={Image} alt="" />
                    <div>
                      <h3>john deo</h3>
                      <span>course instructor</span>
                    </div>
                </div>
                {/* <form action="" method = "POST" enctype = "multipart/form-data"className={classes.flex}> */}
                    <Link to={`#`} className={classes.inlinebtn}>view playlist</Link>
                    {/* <button><h6><i class="far fa-heart"></i><span>like</span></h6></button> */}
                {/* </form> */}
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