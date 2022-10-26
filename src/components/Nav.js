import React, { useState } from 'react'
import '../css/Nav.css';


const Nav = () => {
    const [isSearchActive, setSearchActive] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <div>
            <nav className={isSidebarOpen ? 'active' : ''} >
                <div className="nav-bar">
                    <i className = 'bx bx-menu sidebarOpen' onClick={()=> setIsSidebarOpen(prev => !prev)} ></i>
                    <span className="logo navLogo"><a href="/">Learnpedia</a></span>

                    <div className="menu">
                        <div className="logo-toggle">
                            <span className="logo"><a href="/">CodingLab</a></span>
                            <i className='bx bx-x siderbarClose' onClick={()=> setIsSidebarOpen(prev => !prev)} ></i>
                        </div>

                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="darkLight-searchBox">
                        <div className="dark-light ">
                            <i className='bx bx-moon moon'></i>
                            <i className='bx bx-sun sun'></i>
                        </div>

                        <div className="searchBox">
                            <div className={isSearchActive ? 'searchToggle active' : 'searchToggle'} onClick={()=> setSearchActive(prev => !prev)}>
                                <i className='bx bx-x cancel'></i>
                                <i className='bx bx-search search'></i>
                            </div>

                            <div className="search-field">
                                <input type="text" placeholder="Search..." />
                                <i className='bx bx-search'></i>
                            </div>
                        </div>
                    </div>

                    <div className="login-btn">
                        <a href="/login">Login</a>
                        <a href="/signup">Singup</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav