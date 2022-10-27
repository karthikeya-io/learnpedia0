import React, { useState } from 'react'
import Nav from './Nav'
import '../css/Signupform.css'

const Signupform = () => {

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
    console.log(formDetails);
  }
  return (
    <>
      <div className='signuppage-body'>
        <div className="ccontainer">
          <div className="title">Registration</div>
          <div className="ccontent">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <input onChange={changeHandler} name="fname" type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <span className="details">Last name</span>
                  <input onChange={changeHandler} name='lname' type="text" placeholder="Enter your Last name" required />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input onChange={changeHandler} name='email' type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input onChange={changeHandler} name='phnumber' type="text" placeholder="Enter your number" required />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input onChange={changeHandler} name='password' type="password" placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input onChange={changeHandler} name='cnfpassword' type="password" placeholder="Confirm your password" required />
                </div>
              </div>
              <div className="gender-details">
                <input onChange={changeHandler} type="radio" name="gender" id="dot-1" value="male" checked={formDetails.gender === 'male'}/>
                <input onChange={changeHandler} type="radio" name="gender" id="dot-2" value="female" checked={formDetails.gender === 'female'}/>
                <input onChange={changeHandler} type="radio" name="gender" id="dot-3" value="others" checked={formDetails.gender === 'others'}/>
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Female</span>
                  </label>
                  <label htmlFor="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signupform