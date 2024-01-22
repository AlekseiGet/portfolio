import React, { useEffect } from 'react';
import fon from "../img/matrix.jpg";
import cl from "../components/sliderFon/sliderFon.module.css"
import SliderFon from '../components/sliderFon/SliderFon';

const Cost = () => {

    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
      <div>
        <div className={cl.cbp_fbscroller}>
          <div
            style={{ backgroundImage: `url(${fon})` }}
            className={cl.fbsection1}
          >
            <div
              style={{ alignItems: "center" }}
              className={[cl.content_box, cl.cost_box_align,  "content"].join(" ")}
            >
              <h3>СТОИМОСТЬ КУРСА</h3>
              <span>занятий в йога центре "Разумное тело"</span>

              <div className={cl.cost_box}>
              

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}>
                    <h3>Первое ознакомительное</h3>
                    <h4>Бесплатно</h4>
                  </div>
                  <div className={cl.cost_holder_body}>
                    <h3>1 занятие</h3>
                    <h4>90 минут</h4>
                  </div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}>
                    <h3>разовое занятие</h3>
                    <h4>300 руб.</h4>
                  </div>
                  <div className={cl.cost_holder_body}>
                    <h3>1 занятие</h3>
                    <h4>90 минут</h4>
                  </div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}>
                    <h3>Абонемент</h3>
                    <h4>1100 руб.</h4>
                  </div>
                  <div className={cl.cost_holder_body}>
                    <h3>4 занятий</h3>
                    <h4>6 часов</h4>
                  </div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}>
                    <h3>Абонемент</h3>
                    <h4>2000 руб.</h4>
                  </div>
                  <div className={cl.cost_holder_body}>
                    <h3> 8 занятий</h3>
                    <h4>12 часов</h4>
                  </div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}>
                    <h3>Абонемент </h3>
                    <h4>3800 руб.</h4>
                  </div>
                  <div className={cl.cost_holder_body}>
                    <h3>16 занятий</h3>
                    <h4> 24 часа</h4>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cost;