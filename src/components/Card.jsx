import React from 'react'
import Image from '../images/loginimg2.jpg'
import classes from '../css/Card.module.css'

const Card = () => {
    return (
        <>
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={`${classes.box} ${classes.one}`}>
                    <div classbutton2={classes.details}>
                        <div className={classes.topic}>Description</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque consequatur corporis vitae nobis, ut veniam earum expedita eaque at placeat perferendis unde voluptates explicabo rerum distinctio quis, illo, porro et?</p>
                        <div className={classes.rating}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className={classes.priceBox}>
                            <div className={classes.discount}>$1800.00</div>
                            <div className={classes.price}>$1500.00</div>
                        </div>
                    </div>
                    <div className={classes.button1}>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.two}`}>
                    <div className={classes.imageBox}>
                        <div className={classes.image}>
                            <img src={Image} alt=""/>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.brand}>SONY</div>
                            <div className={classes.name}>SONY ALPHA A7 KIT</div>
                            <div className={classes.shipping}>FREE SHIPPING</div>
                            <div className={classes.button2}>
                                <button>Login For More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card