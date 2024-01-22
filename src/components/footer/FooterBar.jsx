import React, { useEffect, useState } from 'react';
import socialIcons from "../../img/social_icons_new.png";
import { Link } from "react-router-dom";
import cl from "./FooterBar.module.css"

const FooterBar = () => {
    const [show, SetShow] = useState({ opacity:"0"})

    const btnUp = () => {// при прокрутке содержимого страницы
                   window.addEventListener('scroll', () => {
                
                const scrollY = window.scrollY || document.documentElement.scrollTop;// определяем величину прокрутки
                
                scrollY > 800 
                    ? SetShow({ opacity: "0.7" }) 
                    : SetShow({ opacity: "0" }) ;// если страница прокручена больше чем на 800px, то делаем кнопку видимой, иначе скрываем
                
            });        
        }
    btnUp()
   /*const toTop= () => {// Медленная прокрутка вверх
        let t, s;
        s = document.body.scrollTop || window.pageYOffset;
        t = setInterval(function () { if (s > 0) window.scroll(0, s -= 20); else clearInterval(t) }, 5); 
    }
    onClick={toTop}
   */ 
   

    return (
        <div id='contacts' className={cl.conteiner_footer}>
            <a style={show} className={cl.to_Top} href="#top"></a>          
            <div className={cl.footer_content}>
                <div className={cl.social_network}>
                    <div >
                        <span className={cl.title}>Нас можно найти здесь</span>
                        <div className={cl.social_block}>
                            <div className={[cl.social_network_icon, cl.vk].join(' ')}>
                                <a href="https://vk.com/">
                                    <img src={socialIcons} alt="ups" />
                                </a>
                            </div>
                            <div className={[cl.social_network_icon, cl.ok].join(' ')}>
                                <a href="https://ok.ru/">
                                    <img src={socialIcons} alt="ups" />
                                </a>
                            </div>
                            <div className={[cl.social_network_icon, cl.tg].join(' ')}>
                                <a href="https://web.telegram.org/k/">
                                    <img src={socialIcons} alt="ups" />
                                </a>
                            </div>
                            <div className={[cl.social_network_icon, cl.wa].join(' ')}>
                                <a href="https://www.whatsapp.com/?lang=ru">
                                    <img src={socialIcons} alt="ups" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={cl.info_for}>
                    <span className={cl.title}>Информация</span>
                    <ul>
                        <li>
                            <Link to="/privacypolicy"> Политика конфиденциальности персональной информации</Link> 
                        </li>
                        <li>
                            <Link to="/contraindications"> Противопоказания</Link>
                        </li>
                        <li>
                            <Link to="/reviews"> Отзывы</Link>
                        </li>
                        <li>
                            <Link to="/about"> Об учителе</Link>
                        </li>
                        <li>
                            <Link to="/cost"> Стоимость</Link>
                        </li>
                    </ul>
                </div>
            </div>
         <div className={cl.footer_bottom}>
            <span className={cl.warning_text}>Неправомерное использование материалов является административным правонарушением. Копирование  разрешается только после  разрешения автора.</span>
         </div>  
        </div>
    );
};

export default FooterBar;