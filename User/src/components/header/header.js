import React from 'react';
import profile_dummy from '../../static/img/header/profile_dummy.png';
import logo from '../../static/img/header/Archisketch_Logo.png';
import './_header.scss';

const Header= ()=>{
    return (
        <header className="header">
            <div className="header__inner">
                <nav className="nav">
                    <h1 className="header__logo">
                        <div className="logo">
                            <a href="https://www.archisketch.com/">
                                <img className="logo__image" src={logo} alt="Logo"></img>
                            </a>
                        </div>
                    </h1>
                    <ul className="nav__list" >
                        <li className="nav__item">
                            <a className="nav__link" href="https://www.archisketch.com/">Home</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="https://www.archisketch.com/product">Product</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="https://www.archisketch.com/membership">Membership</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link nav__link--active" href="https://www.archisketch.com/ondemand">On-Demand</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="https://www.archisketch.com/partnership">Partnership</a>
                        </li>
                        <li className="nav__item">
                            <div className="nav_user">
                                <span className="profile">
                                    <img src={profile_dummy} className="profile__img" alt="profile_image"></img>
                                    <div className="profile__name">Jaeeun Lee</div>
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}

export default Header;
