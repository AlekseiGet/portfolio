import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import cl from "./TopBar.module.css";
import { useContext } from 'react';
import {Themes} from "../../App.js";
import Logo from '../ui/logo/Logo';
import ChoiceTheme from "../choiceTheme/ChoiceTheme.jsx";
import GitImag from "../../img/svg/github.svg.png";

const TopBar = () => {
    const [burgerClass, setBurgerClass] = useState(cl.bar_tool_burger );
    const [menuClass, setMenuClass] = useState(cl.tool_bar_menu );
    const [show, SetShow] = useState(false);
    const [showName, SetShowName] = useState(false);
    const [delay, setDelay] = useState(0);

    const loc = useLocation();

   

    const barActive = () => {
        if (burgerClass === cl.bar_tool_burger) {
            setBurgerClass(cl.bar_tool_active); 
            setMenuClass([cl.tool_bar_menu, cl.tool_bar_menu_active].join(' '))    
        } else {
            setBurgerClass(cl.bar_tool_burger); 
            setMenuClass(cl.tool_bar_menu)  
        }
    };

    const btnUp = () => {
                   window.addEventListener('scroll', () => {
                
                const scrollY = window.scrollY || document.documentElement.scrollTop;              
                scrollY > 50 
                    ? SetShow(true) 
                    : SetShow(false) ;
                    scrollY > 170 
                    ? SetShowName(true) 
                    : SetShowName(false) ;     
            });        
        }
    btnUp()

     function HeaderView() {
      if (loc.pathname === '/home') {
        return <Link onClick={barActive} to="/about" >
              Обо мне
            </Link>
      }else {
        return <Link onClick={barActive} to="/home" >
        Главная
      </Link>
      }
    }

    setTimeout(() => {
      setDelay(1)
    },500);
    
    return (
      
      <div className={cl.conteiner__tool} >
        <div className={cl.conteiner__tool_shadow} style={show ? {maxWidth: "1260px" }: { width:"100%"} }>
         </div> 
          <div className={cl.conteiner__tool_shell} style={{opacity: delay}}>
          <div className={cl.tool_bar}>
            <div style={{ width:'80px', height:'50px'}} >
              <div className={cl.bar_icon} style={show ? {width:'50px', height:'50px', marginTop: '0px' }: { width:'80px', height:'80px', marginTop: '30px' } }>
               <Logo />
              </div>
            </div>    
          
          <h3 className={cl.tool_bar_name} style={showName? {opacity: 1}: {opacity: 0}}>Getmanov Aleksey</h3>
          <div onClick={barActive} className={menuClass}>
            <div className="underline">
              { HeaderView()}
            </div> 
            <div  style={{display: 'flex', flexDirection: 'row' }}>
             <img className={cl.tool_bar_menu_git} src={GitImag} alt="Github" />
              <div className="underline">              
               <a href="https://github.com/AlekseiGet">
                Github
               </a>
             </div>
            </div>                   
          </div>
           <ChoiceTheme/>
          <div onClick={barActive} className={burgerClass}></div>
        </div>
        </div>             
      </div>
    );
};

export default TopBar;