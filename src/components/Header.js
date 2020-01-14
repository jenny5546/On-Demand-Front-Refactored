import React from 'react';
import "../scss/Header.scss"

class Headers extends React.Component{

    render() {
        return (
            <div className="mainheader">
                <div className="mainheader__contents">
                    <div className="mainheader__logo">
                        <a href="/"><img className="image" src="./Archisketch_Logo.png" alt="logo" /></a>
                    </div>
                    <ul className="mainheader__menubar">
                        <li className="mainheader__menu"> Home </li>
                        <li className="mainheader__menu">uProduct</li>
                        <li className="mainheader__menu"> Membership </li>
                        <li className="mainheader__menu"> On-Demand </li>
                        <li className="mainheader__menu"> Partnership </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Headers