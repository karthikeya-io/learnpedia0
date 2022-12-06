import React from 'react'
import { connect } from 'react-redux'
import classes from '../css/StudentHome.module.css'


const StudentHome = ({ userDetails }) => {
  console.log(userDetails);
  return (
    <div>
      {userDetails ? <div>
        <div className= {`${classes.welcome} ${classes.typewriter}`}>
          <h3>Hi {userDetails.fname}, </h3>
          <h1>Welcome to Learnpedia!</h1>
        </div>
        <div className={classes.continueLearning}>
           <span className={classes.left}>Continue Learning </span>
           <span className={classes.right}><button className={classes.btnShome}> MY ENROLLMENTS <i class='bx bx-right-arrow-alt'></i></button> </span>
           <div className={classes.recentCourse}></div>
        </div>
      </div> : <div></div>}

    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userDetails: state.learnpedia
  }
}


const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(StudentHome)