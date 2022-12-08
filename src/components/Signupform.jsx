import React, { useState } from 'react'
import '../css/Signupform.css'

const Signupform = () => {

  const [formDetails, setFormDetails] = useState({"role": "student"})
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

  const formValidation = () => {
    formDetails.phnumber = formDetails.phnumber.trim()
    if(formDetails.lname ) {
      formDetails.lname = formDetails.lname.trim()
    }

    if (formDetails.fname && formDetails.email && formDetails.gender && formDetails.password && formDetails.cnfpassword) {
      formDetails.fname = formDetails.fname.trim()
      formDetails.email = formDetails.email.trim()
      if (formDetails.fname.length < 3) {
        alert("First name must of size atleast size 3")
        return false;
      }
      if (!isNaN(formDetails.fname.charAt(0))) {
        alert("name must not start with number")
        return false;
      }
      if(formDetails.cnfpassword != formDetails.password) {
        alert("password mush match confirm password")
        return false
      }

      return true;
    } else {
      console.log('hello');
      return false;
    }
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
    if (!formValidation()) {
      return false;
    }
    alert(JSON.stringify(formDetails))
    console.log(formDetails);
    postData('http://localhost:4000/users', formDetails)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    setFormDetails({"role": "student"});
  }

  return (
    <>
      <div className='signuppage-body'>
        <div className="ccontainer">
          <div className="title">Registration</div>
          <div className="ccontent">
            <form action="#" onSubmit={submitHandler}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <input onChange={changeHandler} name="fname" type="text" value={formDetails.fname || ""} placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                  <span className="details">Last name</span>
                  <input onChange={changeHandler} name='lname' type="text" value={formDetails.lname || ""} placeholder="Enter your Last name" />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input onChange={changeHandler} name='email' type="email" value={formDetails.email || ""} placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input onChange={changeHandler} name='phnumber' type="text" value={formDetails.phnumber || ""} placeholder="Enter your number" required />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input onChange={changeHandler} name='password' type="password" value={formDetails.password || ""} placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input onChange={changeHandler} name='cnfpassword' type="password" value={formDetails.cnfpassword || ""} placeholder="Confirm your password" required />
                </div>
              </div>
              <div className="gender-details">
                <input onChange={changeHandler} type="radio" name="gender" id="dot-1" value="male" checked={formDetails.gender === 'male'} />
                <input onChange={changeHandler} type="radio" name="gender" id="dot-2" value="female" checked={formDetails.gender === 'female'} />
                <input onChange={changeHandler} type="radio" name="gender" id="dot-3" value="others" checked={formDetails.gender === 'others'} />
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
              <div className="gender-details">
                <input id="dot-4" onChange={changeHandler} type="radio" name="role"  value="student" checked={formDetails.role === 'student'} />
                <input id="dot-5" onChange={changeHandler} type="radio" name="role"  value="teacher" checked={formDetails.role === 'teacher'} />
                {/* <input onChange={changeHandler} type="radio" name="gender" id="dot-3" value="others" checked={formDetails.gender === 'others'} /> */}
                <span className="gender-title">Select role</span>
                <div className="category">
                  <label   htmlFor="dot-4">
                    <span className="dot four"></span>
                    <span className="gender">Student</span>
                  </label>
                  <label  htmlFor="dot-5">
                    <span className="dot five"></span>
                    <span className="gender">Teacher</span>
                  </label>
                  {/* <label htmlFor="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Prefer not to say</span>
                  </label> */}
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