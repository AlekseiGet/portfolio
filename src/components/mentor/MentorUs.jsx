import React, { useEffect } from 'react';
import cl from "./mentorUs.module.css";
import MyButtonRed from '../ui/button/MyButtomRed';
import background from "../../img/photo_2022-08-11_21-21-17.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const MentorUs = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[])

    return (
        <div data-aos="fade-up" className={cl.mentor_body}>
            <div className="content">
                <div className={cl.mentor_content}>
                    <div data-aos="fade-up" className={cl.mentor_content_title}>
                      Наставаник
                  </div>
                  <div className={cl.mentor_content_body}>
                        <div data-aos="fade-up" className={cl.mentor_content_body_image}></div>
                        <div className={cl.mentor_content_body_text}>
                            <div data-aos="fade-up" className={cl.mentor_content_body_text_title}>
                                Куприкова Галина
                                </div>
                            <div data-aos="fade-up"  className={cl.mentor_content_body_text_sudtitle}>
                                Учитель и автор курса
                            </div>
                            <div data-aos="fade-up"  className={cl.mentor_content_body_text_content}>
                                <span data-aos="fade-up" >
                                   Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару   
                                </span>
                                 <br />
                                 <br />
                                 <span data-aos="fade-up" >
                                     Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару
                                 </span>
                                <br />
                                 <br />
                                 <span data-aos="fade-up" >
                                     Человеческий организм получает почти все необходимые вещества именно через пищу и воду. С питанием связаны все жизненно важные функции организма. Недостаток полезных веществ, содержащихся в том же мясе, например железа высокой биологической доступности, может вызвать серьезные проблемы со здоровьем.
                                 </span>
                               </div>
                            <div data-aos="fade-up"  className={cl.mentor_content_body_text_link}>
                                <MyButtonRed
                                    textBtn={'Узнать больше'}
                                    toBtn={'/about'}
                                />
                            </div>
                        </div>
                  </div>
               </div>
            </div>            
        </div>
    );
};

export default MentorUs;