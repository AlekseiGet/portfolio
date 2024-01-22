import React, { useEffect, useState } from 'react';
import cl from "./block.module.css"
import MyButtonGreen from '../ui/button/MyButtonGreen';
import Aos from "aos";
import "aos/dist/aos.css"; 

const Block = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
            <div  className={cl.conteiner_box}>
               <div className="content">
                <div className={cl.conteiner_box_context}>
                    <h2 data-aos="fade-up"  >{props.title}</h2>
                    <span data-aos="fade-up"  >{props.text[1]}</span>
                    <span data-aos="fade-up"  >{props.text[2]}</span>
                    <span data-aos="fade-up"  >{props.text[3]}</span>
                    <span data-aos="fade-up"  >{props.text[4]}</span>
                    <span data-aos="fade-up"  >{props.text[5]}</span>
                    <div data-aos="fade-up"   className={cl.box_context_btn}>
                        {props.textBtn
                            ? <MyButtonGreen textBtn={props.textBtn} toBtn={props.toBtn} />
                              : <div></div>
                            } 
                    </div>
                    
                </div>                          
               </div>           
            </div> 
    );
};

export default Block;