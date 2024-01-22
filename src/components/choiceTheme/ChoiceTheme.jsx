import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Themes} from "../../App";
import cl from "./ChoiceTheme.module.css";
import sun from "../../img/svg/32228.svg";
import moon from "../../img/svg/moon3.png";
import togle from "../../img/svg/luna51.png";
import winter from "../../img/svg/winter.png";

const ChoiceTheme = () => {
    const { value, value2 } = useContext(Themes);
    const [choiceTheme, setChoiceTheme] = value;
    const [theme, setTheme] = value2;
    const [color, setColor] = useState(togle);


    useEffect(() => {
        theme ==='2'? setColor(togle):
        theme ==='3'? setColor(moon):
        setColor(sun)
        
    },[theme])


    
    return (
        <div className={cl.choiceTheme} >
            
            <div onClick={()=>setChoiceTheme(!choiceTheme) } className={cl.choice_theme_togle}>
                <div className={cl.choice_button}>
                    <img src={color} alt="тема" />
                </div>
            </div>
           
            <div className={cl.choice_theme_button}>
                <div onClick={()=> {setTheme("1"); setChoiceTheme(false) }} className={[cl.choice_button, cl.choice_button_one].join(' ')} style={choiceTheme? {top:"25px", left: "-40px"}: {}}>
                    <img src={sun} alt="светлая" />
                </div>
                <div onClick={()=> {setTheme("2"); setChoiceTheme(false)}} className={[cl.choice_button, cl.choice_button_two].join(' ')} style={choiceTheme? {top:"45px", left: "0px"}: {}}>
                    <img src={togle} alt="серая" />
                </div>
                <div onClick={()=> {setTheme("3"); setChoiceTheme(false)}} className={[cl.choice_button, cl.choice_button_three].join(' ')} style={choiceTheme? {top:"25px", right: "-40px"}: {}}>
                    <img src={moon} alt="тёмная" />
                </div>
            </div>
            
        </div>
    );
};

export default ChoiceTheme;