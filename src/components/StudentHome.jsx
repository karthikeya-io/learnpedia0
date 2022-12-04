import React from 'react'
import { connect } from 'react-redux'



const StudentHome = ({userDetails}) => {
    console.log(typeof(userDetails));
  return (
    <div>
      <h1 style={{margin: "90px"}}>Student home</h1>
      {userDetails ? <h1>{userDetails.email}</h1> : <h1></h1>}
        
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