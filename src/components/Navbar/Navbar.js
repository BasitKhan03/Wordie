import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
    let nav, link, btnDark, toggleBtn;

    if(props.mode === true)
    {
        nav = 'navStyle';
        link = 'linkStyle';
        btnDark = 'btnStyle';
        toggleBtn = 'toggleStyle';  
    }
    else
    {
        nav = '';
        link = '';
        btnDark = '';
        toggleBtn = '';
    }

    const handleHome = ()=>{
        document.title = 'Wordie | Home';
    }

    const handleAbout = ()=>{
        document.title = 'Wordie | About';
    }

    return (
        <header>
            <nav className={`navbar ${nav}`}>
                <div className="logo">
                    <div className="logo-text-div">
                        <h1 className="logoHeading">{props.title}</h1>
                    </div>
                </div>

                <ul className="nav-links">
                    <div className="menu">
                        <li><NavLink activeClassName="active" className={link} to="/" onClick={handleHome}>{props.link1}</NavLink></li>
                        <li><Link className={link}>{props.link2}</Link></li>
                        <li><NavLink activeClassName="active" className={link} to="/about" onClick={handleAbout}>{props.link3}</NavLink></li>
                        <li><Link className={link}>{props.link4}</Link></li>
                        <li><NavLink className="cta"><button className={`headerBtn ${btnDark}`}>{props.btn}</button></NavLink></li>

                        {/* <li><a className={`active ${link}`} href="#">{props.link1}</a></li>
                        <li><a className={link} href="#">{props.link2}</a></li>
                        <li><a className={link} href="#">{props.link3}</a></li>
                        <li><a className={link} href="#">{props.link4}</a></li>
                        <li><a className="cta" href="#"><button className={`headerBtn ${btnDark}`}>{props.btn}</button></a></li> */}
                        <li>
                            <input type="checkbox" className="checkbox" id="checkbox" onClick={props.toggleMode}/>
                            <label htmlFor="checkbox" className={`label ${toggleBtn}`}>
                                <i className="fas fa-moon"></i>
                                <i className='fas fa-sun'></i>
                                <div className='ball'></div>
                            </label>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string,
    btn: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Enter Title Here',
    link1: 'Link 1',
    link2: 'Link 2',
    link3: 'Link 3',
    link4: 'Link 4',
    btn: 'Link Btn'
}

export default Navbar