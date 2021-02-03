import userEvent from '@testing-library/user-event';
import React from 'react';
import "./styles.css";
import Img from "../../assets/profile-user.png";
import User from "../../assets/user.png";

function HeaderSup({name, ocupation}){
    return(
        <>
        <div className="header-sup">
            <h1>Portal UFRJ</h1>

            <div className="user">
                <div className="username">
                    <h4>{name}</h4>
                    <p><img src={User} className="user-icon"/>{ocupation}</p>

                </div>
                <img src={Img} className="image-user"/>
            </div>
        </div>
        
        </>
    )
}

export default HeaderSup