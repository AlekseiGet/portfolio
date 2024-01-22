import React from 'react';
import icon from "../../../img/svg/Gproger.png";
import { Link } from "react-router-dom";
import cl from "./logo.module.css"

const Logo = () => {
    return (
        <div >
            <Link to="/about">
              <img className={cl.logo} src={icon} alt="Пока нет" />
            </Link>  
        </div>
    );
};

export default Logo;

