import React from 'react'
import Image from '../images/pexels-pixabay-276452.jpg'
import classes from '../css/Card.module.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Card = (props, {userDetails}) => {
    
    const {title, price, categorydb, desc, id} = props
    let fdesc = desc.substr(0, 150)

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.right}>
                    <div className={classes.logo}>{title}</div>
                    <div className={classes.stars}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className={classes.about}>
                        <p>{fdesc}</p>
                    </div>
                    <button>
                        {userDetails ?  <Link className={classes.link} to={'/shome'}><h2 className={classes.price}>Enroll Now</h2></Link> :  <Link className={classes.link} to={'/login'}><h2 className={classes.price}>Enroll Now</h2></Link>}
                       
                        <h2>₹{price}</h2>
                    </button>
                </div>
                <div style={{
                    "background": `url(${Image}) no-repeat`, "backgroudSize": "cover", "backgroundPosition": "center", "height": "100%",
                    "width": "50%", "borderRadius": "0 5px 5px 0"
                }} className={classes.left} >
                    <ul>
                        <li>Flexible</li>
                        <li>Life time access</li>
                        <li>Taught by professionals</li>
                        <li>Doubt assistance</li>
                        <li>@just ₹{price}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
      userDetails: state.learnpedia
  }
  }
  
  
  const mapDispatchToProps = dispatch => ({})
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card)