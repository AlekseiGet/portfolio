import React, { useEffect, useState } from 'react';
import cl from "./block.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import BlocKImage from '../ui/blockImage/BlocKImage';
import certificate1 from '../../img/certificate/photo_2022-06-09_14-07-28.jpg';
import certificate2 from '../../img/certificate/photo_2022-12-01_11-29-36.jpg';
import certificate3 from '../../img/certificate/photo_2023-01-09_16-09-49.jpg';
import certificate4 from '../../img/certificate/photo_2023-02-14_13-12-20.jpg';
import certificate5 from '../../img/certificate/photo_2023-02-14_13-12-21.jpg';

const BlockText = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    /* const[show, setShow] = useState(false)


               <section>
            <h1 onClick={()=> setShow(!show)} >{show? "скрыть": "Показать" } время </h1>

            <CSSTransition in={show} classNames="alert" timeout={2300} unmountOnExit>
                    <span>дипломы</span>
            </CSSTransition>

           </section>
    */ 
 

    return (
        <div className={cl.conteiner_box}>
            <div className="content">
                <div className={cl.conteiner_box_list}>
                    <h3 data-aos="zoom-out-up">Здесь о том как появилась школа йоги</h3>
                    <span data-aos="zoom-out-up"> О том сколько лет .... оседлое население Орды включало волжских булгар, мордовские народы, славян, греков и др. Среди кочевых народов были половцы, канглыи, татары, туркмены, киргизы и другие.</span>
                    <h3 data-aos="zoom-out-up">дипломы</h3>
                    <BlocKImage
                        image={[certificate1, certificate2, certificate3, certificate4, certificate5]}
                        jusCont={'center'}
                    />
                    <span data-aos="zoom-out-up">И в заключении... Расширение государства на юг привело к столкновению с могущественной Хазарией, центр которой располагался на нижней Волге. Князь Святослав нанёс хазарам сокрушительный удар в 965 году. Его мать княгиня Ольга в частном порядке приняла христианство, а её внук Владимир окончательно закрепил христианство на Руси в 988 году.</span>

                </div>
            </div>
        </div>
    );
};

export default BlockText;