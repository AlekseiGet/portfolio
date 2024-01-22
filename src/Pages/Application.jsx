import React, { useEffect } from 'react';
import cl from '../components/box/block.module.css';


const Application = () => {
    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
      <div className="background_box">
        <div className={[cl.conteiner_box, "pops_up_box", "content"].join(" ")}>
          <h2>РАСПИСАНИЕ ЗАНЯТИЙ В ЙОГА ЦЕНТРЕ 'Разумное Тело'</h2>
          <span>
            ПРОСЬБА ЗАПИСЫВАТЬСЯ НА ЗАНЯТИЯ ПО ТЕЛЕФОНУ +7 (8634) 122 22 31
          </span>
          <h2>
            Занятия проходят по адрессу : г.Таганрог ул. Пушкина строение 77
          </h2>
          <span>
            ПРОСЬБА ЗАПИСЫВАТЬСЯ НА ЗАНЯТИЯ ПО ТЕЛЕФОНУ +7 (8634) 122 22 31
          </span>
          <span>понедельник : 17-00 до 19-00</span>
          <span>среда : 9-00 до 11-00</span>
          <span>пятница : 17-00 до 19-00</span>
          <span>С нетерпением ждём нашей встречи !</span>
        </div>
      </div>
    );
};

export default Application;