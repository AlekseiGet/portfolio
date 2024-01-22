import React from 'react';
import cl from "./block.module.css";
import depression from "../../img/matrix.jpg";
import pregnant from "../../img/pregnantI.jpg";
import agry from '../../img/agry.jpg';
import disease from "../../img/disease.jpg";
import evolution from '../../img/EvolutionYoga.jpg'
import BlocKImage from '../ui/blockImage/BlocKImage';
import MyButtonGreen from '../ui/button/MyButtonGreen';

const BlockTwoo = () => {
    return (
        <div  className={cl.conteiner_box}>
             <div className="content">
                <div className={cl.conteiner_box_list}>

                    <h3>1. Постоянные противопоказания к занятий йогой</h3>
                    <span>
                        Когда есть эти противопоказания, то в занятиях йогой нет ровно никакого смысла. Йога оказывает терапевтическое воздействие лишь в том случае, если человек находится в некоем «среднем диапазоне». Т.е. если он уже вышел за "привычные" жизненные диапазоны, оказался в различных критических состояниях - практиковать йогу не рекомендуется. Можно, конечно, но никто и никогда не даст вам никаких гарантий.
                    </span>
                    <ul>Есть какие-либо психические заболевания (особенно шизофрения) - не практикуйте. Есть вероятность, что занятия могут помочь. Но есть гораздо большая вероятность того, что может стать хуже. Поэтому, если вы наблюдаетесь у психиатра - обязательно проконсультируйтесь с ним, перед тем как идти на занятия йогой.</ul>
                    
                      <BlocKImage
                        image={[disease]}
                        jusCont={'right'}
                      />

                    <ul> Поставленные врачами диагнозы:                       
                        <li>Гипертоническая болезнь (артериальная гипертензия от 2 стадии и выше)</li>
                        <li>Повышенное внутричерепное давление (внутричерепная гипертензия)</li>
                        <li>Тяжелые поражения сердечно-сосудистой системы (ишемическая болезнь, ревматизм в активной фазе, пароксизмальная тахикардия,  мерцательная аритмия; аневризм аорты и некомпенсированные пороки сердца);</li>
                        <li>Инфекционные поражения суставов: например, инфекционный или реактивный артрит;</li>
                        <li>Инфекции головного или спинного мозга;</li>
                        <li>Злокачественные новообразования (то есть при раке или саркоме);</li>
                        <li>Тяжелые заболевания крови;
                            При наличии таких заболеваний занятия йогой противопоказаны однозначно. Основная задача в таких жутких случаях - просто выжить. Раз  человек дошёл до таких жутких состояний - йога уже никак не поможет. И все ресурсы должны быть направлены именно на выживание. Когда случится "нормальное" состояние - тогда можно приступать и к йоге</li>
                    </ul>

                    <h3>2. Ситуации, когда с занятиями йогой лучше повременить до выздоровления</h3>
                    <ul> 
                        <li>В течении полугода после инсультов - йогу не практикуйте.</li>
                        <li>При тяжелых черепно-мозговых травмах и травматических  повреждениях костей и позвоночника практиковать йогу не нужно</li>
                        <li>При любых острых заболеваниях внутренних органов (например, при обострении панкреатита или холецистита, при аппендиците и т. д.), а также при паховых грыжах - ни о какой йоге и речи быть не может.</li>
                    </ul>
                    <span>Подводя небольшой итог по этой ужасной части.</span>
                    <span>
                        Если вы наблюдаетесь у врача «по серьёзному» (т.е. не по поводу банальных ОРВИ у участкового терапевта, а вам уже назначен лечащий врач), то перед тем как идти на йогу - обязательно проконсультируйтесь об этом с ним.
                        А после того, как он дал вам «добро» на занятия, обязательно уведомите инструктора йоги о вашем заболевании.
                    </span>

                    <h3>
                        3. Большое депрессивное расстройство («клиническая депрессия») в острой стадии
                    </h3>
                    <span>
                        Когда длительное время не находится смысл жизни, психическое состояние нестабильное, настроение подавленное или есть какие-либо суицидальные тенденции - лучше не практикуйте йогу. Может стать лучше, но с точно такой же вероятностью, может всё и усугубиться. Традиционная физическая активность (или трудотерапия) в этом случае окажет значительно бОльшую пользу. Но когда состояние станет стабильным - к занятиям йогой можно подойти.
                    </span>
                    <BlocKImage
                        image={[depression]}
                        jusCont={'center'}
                    />                
                    <span>
                        Но обязательно уведомите инструктора о том, что с вами происходит. А лучше - найдите такого инструктора, которому самому «посчастливилось» пройти через эту муку длительного беспричинного ужаса, с безудержной тоской. Он сам еще помнит как идти по этому лезвию бритвы и понимает, как наиболее безболезненно по этому пути пройти.
                        Но также, перед тем, как куда-либо идти - обязательно спросите у своего психотерапевта.
                        Если у вас депрессия, но нет психотерапевта - обязательно найдите. Это самое лучшее, что можно в этом состоянии сделать.
                    </span>
                    
                    <h3>4. Беременность</h3>
                    <span>Да, есть специальная «йога для беременных». Но по факту, то, что происходит на этих занятиях, никакого отношения к йоге не имеет. На занятиях по перинатальной йоге уделяется много внимания для дыхания и для расслабления всего тела, а также суставная гимнастика. Причем программа занятий выстраивается в зависимости от триместра и может сильно варьировать. Но в любом случае надо понять, что это - не йога. Правильней назвать такие занятия «Лечебная физическая культура». Хотя никто их, конечно, не заставляет называть так, как тому хочется. Йога - бесхозный бренд :)</span>
                    <BlocKImage
                        image={[pregnant]}
                        jusCont={'left'}                       
                    /> 
                   
                    <h3>5. Не занимайтесь йогой сегодня, если у вас</h3>
                                            
                            <ul>
                                <li> <i>Головная боль.</i>  Если болит голова - лучше пойти погулять. На улице или на природе. А вот когда головная боль пройдет - тогда уже можно и заняться йогой. Не насилуйте себя.</li>
                                <li><i>Недомогание.</i>  Когда вам просто «нехорошо» - также не стоит себя заставлять заниматься йогой «через силу». Организм ослаблен. Ему надо дать возможность «прийти в себя». Лучше возьмите и посмотрите какой-нибудь добрый фильм. Или прочитайте хорошую книгу. По соц.сетям и ютюбу лучше не лазить, от этого лучше не становится</li>
                                <li> <i>Месячные.</i> Если вы женщина, вы понимаете, что не надо себя в этом состоянии к чему-то дополнительно принуждать. Происходящее в это время в организме и так создаёт для него достаточно большую нагрузку. Если уж вам так хочется в «эти дни» заняться йогой, то занятия должны быть максимально расслабленными, «в кайф». Не нужно заниматься «через силу». Дополнительно о практике занятий йогой во время месячных.</li>
                            </ul>                 
                    

                    <h3>6. Не практикуйте йогу минимум 3 часа, если:</h3>
                    
                            <ul>
                                <li>Вы находитесь во взбудораженном состоянии</li>
                                <li>Вы занимались активной физической деятельностью</li>
                                <li>Вы посетили баню</li>
                            </ul>
                    <BlocKImage
                        image={[agry]}
                        jusCont={'center'}
                    /> 
                            <span>
                                Будет лучше, если вы сделаете перерыв хотя бы 5-6 часов.
                                Дело в том, что во всех этих случаях организм находится под влиянием симпатической части вегетативной нервной системы. А занятия йогой активизируют противоположную, парасиматическую часть.
                                Занятия йогой в таком состоянии будут похожи на действия водителя, который пытается одновременно жать на педали газа и тормоза. Но если с автомобилем это в некоторых ситуацих может быть полезно, то в реальной жизни могут случиться... неожиданности.
                                <br />Ну и помните, что не надо практиковать на полный желудок. Подождите несколько часов. Если же перед занятиями йогой вы чувствуете голод - выпейте немного воды или съешьте какой-нибудь фрукт. Не наедайтесь. А то торможение будет слишком уж заначительное. Да и просто это неудобно - заниматься и слушать, как внутри громко перетекают внутренние жидкости :)
                            </span>
                 

                    <h3>7.Экзистенциальные противопоказания к занятиям йогой.</h3>
                    <span>
                        Но на самом деле основное противопоказание к занятиям йогой находится совсем в другом месте.
                        Дело в том, что регулярные занятия йогой неизбежно способствуют тому, что перед практикующим открывается истина. Не целиком, нет. Целиком - это совсем несовместимо с «нормальной» жизнью. В этом случае прямой путь в психушку. Психика с этим не справится.
                        Истина открывается постепенно, маленькими фрагментами.
                        Если практика регулярна и систематична, то это происходит достаточно экологично.
                        Но мы знаем, что количество и качество рассматриваются как части одного целого, представляющего собой стороны одного и того же предмета. И потому через некоторое время занятий «скачком» изменяется качество восприятия.
                        Это аналогично тому, как растёт ребёнок. Рост происходит регулярно, по несколько миллиметров в неделю. Этого никто не замечает. А потом - раз - и в определенный момент вещи становятся (всегда неожиданно!) малы.
                        Ну или этот избитый пример, как со временем одно состояние бабочки изменяется на сильно другое:
                        
                        <br />Так же и с внутренними изменениями. Если заниматься регулярно, то изменения в психике постепенно нарастают. Незаметно. Но через некоторое время практики (через полгода, через год, через 10 лет - для каждого человека эта скорость своя) «вдруг» оказывается, что своё понимание себя вообще не соответствует тому, что есть на самом деле.

                        <br />И тогда приходится меняться. И жить в соответствии с новыми представлениями о себе и о мире.
                        А это часто оказывается достаточно болезненно.
                        Да, потом становится лучше. Но процесс перехода, процесс трансформации - крайне неприятен.
                        И никуда не денешься от того, чтобы это не пережить

                        <br />Если вы к этому не готовы - йогу лучше не практиковать. Ну или оставить её на уровне физкультуры. Т.е. позанимались своими телом, расслабились, сбросили с себя излишнее напряжение - и можно двигаться дальше, устремляясь в этот бесконечный информационный шторм.
                        С одной стороны - «переливание из пустого в порожнее», но с другой - позволяет хоть сколько-то эффективно жить-выживать. И не задумываться о реальности. Это тоже неплохо. «Все ведь так живут».
                        Но в этом случае очень важно - не уходить слишком глубоко, оставаться «на поверхности». Тогда удаётся соблюсти баланс между иллюзорностью сознания и реальностью мира. «Весь мир - театр, а люди - актёры». Тоже хороший вариант и если удастся остаться на этом уровне - просто отлично. Тогда можно «жить, поживать, да добра наживать».
                        
                        <p />Но если решитесь идти дальше - будьте готовы к тому, что ваши ранние представления о себе могут сильно поменяться.
                        <p />А это - не всегда приятно.
                        <p />И потому является основным противопоказанием к занятиям йогой :)
                    </span>

                    <h3>8. Когда же можно заниматься йогой?</h3>

                    <BlocKImage
                        image={[evolution]}
                        jusCont={'center'}
                    /> 

                    <span>
                        Если  понимаете, что вам необходимо улучшить качество своей жизни - время начинать занятия йогой.
                        Перечитайте внимательно статью. Обратите внимание, что у вас нет противопоказаний к занятиям (у 99% людей их нет) и приступайте.
                    </span>

                    <h3>Не знаете, что выбрать?</h3>
                    <span>У нас есть бесплатные консультации по подбору оптимального комплекса для занятий йогой.

                     <br/>   До встречи на занятиях!</span>

                </div>
              
             </div>
        </div>
    );
};

export default BlockTwoo;