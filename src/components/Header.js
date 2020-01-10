import React from 'react';
import "../scss/Header.scss"

class Headers extends React.Component{

    render() {
        return (
            <div className="mainheader">
                <div className="contents">
                    <div className="logo">
                        <img className="image" src="./Archisketch_Logo.png" alt="logo" />
                    </div>
                    <ul className="menubar">
                        <li className="menu home"> Home </li>
                        <li className="menu product"> Product</li>
                        <li className="menu membership"> Membership </li>
                        <li className="menu ondemand"> On-Demand </li>
                        <li className="menu partnership"> Partnership </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Headers