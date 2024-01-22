import React from 'react';
import cl from "../button/myButtom.module.css"
import { Link } from 'react-router-dom';

const MyButtonGreen = (props) => {
 
    return (
        <div className={cl.container_btn}>
            <div className={[cl.btn, cl.btn_green].join(' ')}><Link to={props.toBtn}>{props.textBtn}</Link></div>

        </div>
    );
};

export default MyButtonGreen;