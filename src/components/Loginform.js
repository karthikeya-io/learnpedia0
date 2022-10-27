import React,{useState} from 'react'
import Nav from './Nav'
import Image from '../images/loginimg2.jpg'
import '../css/Loginform.css'


const Loginform = () => {

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
<div className="lbody">
  <div className="lcontainer">
    <div className="cover">
      <div className="front">
        <img src={Image} alt=""/>
        <div className="text">
          <span className="text-1">Every new course is a <br/> new journey</span>
          <span className="text-2">Let's get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#" onSubmit={submitHandler}>
            <div className="input-boxes">
              <div className="input-box">
                <input onChange={changeHandler} name='email' type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <input onChange={changeHandler} name='password' type="password" placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Submit"/>
              </div>
              <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</div>
  )
}

export default Loginform;