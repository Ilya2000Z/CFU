import React, { Component } from "react";
import { Row,Col} from "react-bootstrap";
import classes from "./firstPage.css";
import "./firstPage.css";
import logo from "./logo512.png";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import img1 from "../firstPage/img/farmer.png"
import down from "../firstPage/img/down.png"
import beatch from "../firstPage/img/beach.png"
import exhibition from "../firstPage/img/exhibition.png"
import dna from "../firstPage/img/dna.png"
import it from "../firstPage/img/it.png"
import head from "../firstPage/img/head.png"
import cpu from "../firstPage/img/cpu.png"
import chart from "../firstPage/img/chart-down.png"
import spider from "../firstPage/img/image-from-rawpixel-id-3344142-png.png"
import right from "../firstPage/img/right-arrow.png"
import journalist from "../firstPage/img/journalist.png"
import img4 from "../firstPage/img/Рисунок4.png"
import img2 from "../firstPage/img/Рисунок2.png"
import img3 from "../firstPage/img/Рисунок3.png"
import zoltan from "../firstPage/img/zoltan-tasi-eS1omi9_W58-unsplash.jpg"
import rawpixel from "../firstPage/img/image-from-rawpixel-id-3397640-png.png"
import raeng from "../firstPage/img/thisisengineering-raeng-sbVu5zitZt0-unsplash.jpg"
import ashkan from "../firstPage/img/ashkan-forouzani-f44b7g7cM7E-unsplash.jpg"
import quattro from "../firstPage/img/image-from-rawpixel-id-2091813-png.png"
import miend from "../firstPage/img/image-from-rawpixel-id-2846934-png.png"



export default class FirstPage extends Component{
    render(){
        return(
            <div>
                <Header jwt={this.props.jwt} />
<Col md={12} xs={12} lg={12}>
    <div className={classes.wrapper}>
        <Col lg={12} xs={12} md={12}>
        <div className={classes.wrapperbg}>
            <Col xs={11}>
            <p className={classes.title1}>Исследовательский центр </p>
            </Col>
            <Col xs={11}>
            <p className={classes.title2}>Искусственного интеллекта</p>
            </Col>
            <p className={classes.title3}>И больших данных</p>
            <p className={classes.subtitle}>Физико-технический институт ФГАОУ ВО "КФУ имени В.И. Вернадского"</p>
            <div className="d-flex justify-content-end">
                <div className={classes.titleblock}>
                    <p className={classes.titleblocktext}>Компьютер — это самый удивительный инструмент, с каким я когда-либо сталкивался. Это велосипед для нашего сознания </p>
                    <p className={classes.cite}>Стив Джобс</p>
                </div>
            </div>
        </div>
        </Col>
    </div>
</Col>
<div className={classes.wrapperregbg}>
<div class="row w-100  pt-5 pb-5">
                <a href="/entry">
                    <div className={classes.regtext} style={{"textAlign":"center"}}> <button style={{"backgroundColor":"#FFFAFA"}} className={classes.butset}>РЕГИСТРАЦИЯ</button> </div>
                    </a>

                <div style={{"marginTop":"30px"}}></div>
                <div style={{"textAlign":"center"}}>
                    <p className={classes.regtext} >Пройдите регистрацию чтобы быть в курсе всех самых интересных событий которые ожидают каждого кто станет частью этого большого IT праздника</p>
                </div>
                <div className={classes.centralfirst}>
                    <a href="/event" className={classes.btnfirst2}><button className={classes.regbtnFirst}>Узнать подробнее</button></a>
                </div>

            </div>

</div>
     <div className={classes.textContainer}>      
    <div class="row w-100">
        <div className="col-md-12">
            <p className={classes.targettitle}>Целевая модель трансформации</p>
        </div>
        <Col lg={4}>
        <div>
            <div className={classes.centreCont}>
            <p className={classes.targetsubtitle}>Миссия</p>
            <p className={classes.targetsubtitletext}>территориальное развитие Крыма через</p>
            <img className={classes.imgarrow} src={down}/>
            <p className={classes.targettext}>Инновационное развитие отраслей
            </p>
            <div class="row">
                <div className="col-md-4">
                    <img className={classes.imgtarget} src={img1}/>
                    <p className={classes.textcenter}>сельское хозяйство</p>
                </div>
                <div className="col-md-4">
                    <img className={classes.imgtarget} src={beatch}/>
                    <p className={classes.textcenter}>санаторно-курортная реабилитация</p>
                </div>
                <div className="col-md-4">
                    <img className={classes.imgtarget} src={exhibition}/>
                    <p className={classes.textcenter}>социально-культурная сфера</p>
                </div>
            </div>
            <p className={classes.targettext}>Инновации через</p>
            <div class="row">
                <div class="col-md-4">
                    <img className={classes.imgtarget} src={dna}/>
                    <p className={classes.textcenter}>генетику</p>
                </div>
                <div class="col-md-4">
                    <img className={classes.imgtarget} src={it}/>
                    <p className={classes.textcenter}>цифровые технологии
                    </p>
                </div>
                <div class="col-md-4">
                    <img className={classes.imgtarget} src={head}/>
                    <p className={classes.textcenter}>искусственный интеллект</p>
                </div>
            </div>
            </div>
        </div>
        </Col>
        <Col lg={4}>
        <div>
            <img id="CPUID" className={classes.image} src={spider}/>
        </div>
        </Col>
        <Col lg={4}>
        <div>
            <div className={classes.centreCont}> <img className={classes.imgstrategy} src={cpu}/></div>
            <div className={classes.centreCont}>
            <p className={classes.strategysubtitle}>Стратегическая цель </p>
            <p className={classes.targetmenu}>стать научной, образовательной и технологической платформой для высокоприбыльных компаний в области агробиотеха, медицины, природного и культурного потенциала региона для обеспечения устойчивого инновационного и социально- экономического развития
                Республики Крым.
            </p>
            </div>
            <div className={classes.student}>
                <div class="row">
                    <Col lg={4} xs={4}>
                        <img className={classes.imgstrategy} src={chart}/>
                        <p className={classes.strategysubtext}>Уменьшение санкционных ограничений
                        </p>
                    </Col>
                    <Col lg={4} xs={4}>
                        <img className={classes.imgstrategy} src={right}/>
                    </Col>
                    <Col lg={4} xs={4}>
                        <img className={classes.imgstrategy} src={journalist}/>
                        <p className={classes.strategysubtext}>академической дипломатии</p>
                    </Col>
                </div>
            </div>

        </div>
        </Col>
    </div>
    </div>        

    <div className={classes.wrapper2Mob}>
    <p className={classes.textbauble} style={{"textAlign":"center"}}>Цифровизация и <br/>искусственный интеллект</p>
        <Col xs={11}>
            <div className={classes.buablecenter}>
                <div className={classes.bauble}>Центр искусственного интеллекта и больших данных</div>
                <div className={classes.bauble}>Лаборатория параллельных вычислений</div>
                <div className={classes.bauble}>Научно-образовательный центр информационной безопасности и программных средств</div>
                <li className={classes.bauble}>Лаборатория кибербезопасности</li>
                <li className={classes.bauble}>Фаблаб</li>
                <li className={classes.bauble}>Лаборатория ИИ</li>
                <br></br>
            </div>
        </Col>   
    </div>
    <div className={classes.wrapper2}>
        <div className={classes.bground}>
            <div class="row w-100 d-flex m-auto">
                <div class="col-md-2">
                    <div className={classes.padset}>
                    <div className={classes.round}>
                        <p className={classes.roundtext}>Центр искусственного интеллекта и больших данных</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-2">
                <div className={classes.padset2}>
                    <div className={classes.round}>
                        <p className={classes.roundtext}>Лаборатория параллельных вычислений</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div className={classes.round}>
                        <p className={classes.roundtext}>Научно-образовательный центр информационной безопасности и программных средств</p>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <div className={classes.round}>
                        <p className={classes.roundtext}>Лаборатория кибербезопасности</p>
                    </div>
                </div>
                <div class="col-md-2">
                <div className={classes.padset2}>
                    <div className={classes.round}>
                        <p className={classes.roundtext}>Фаблаб</p>
                    </div>
                </div>    
                </div>
                <div class="col-md-2">
                <div className={classes.padset}>
                    <div className={classes.round}>
                        <p className={classes.roundtext}>Лаборатория ИИ</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="row w-100">
            <div className={classes.titelcenter}>
              <div className={classes.centreCont}>
                <p className={classes.titleround} style={{"textAlign":"center"}}>Цифровизация и <br/>искусственный интеллект</p>
              </div>
              </div>
            </div>
        </div>
    </div>

    {/* <div className={classes.wrapper3}></div> */}

         

    <div className={classes.wrapper3}>
        <div className={classes.bgwrapper3}>
        <div className={classes.mset}>
        <div className={classes.testIMG}> 
            <div class="row w-100">
                <div class="col-lg-3 col-12" style={{"textAlign":"center"}}>
                    <p className={classes.partners}>Наши <br/>партнеры</p>
                </div>
                        <div class="col-lg-3 col-6"><img class="img-fluid"  src={img4}/></div>
                        <div class="col-lg-3 col-6"><img class="img-fluid" src={img2}/></div>
                        <div class="col-lg-3 col-6"><img class="img-fluid" src={img3}/></div>
                        <div class="col-lg-3 col-6"><img class="img-fluid" src={img3}/></div>
                        <div class="col-lg-3 col-6"><img class="img-fluid" src={img4}/></div>
                        <div class="col-lg-3 col-6"><img class="img-fluid" src={img2}/></div>
                        <div class="col-lg-3 col-6"><img class="img-fluid" src={img3}/></div>
                </div>
        </div>
        </div>
        <div>
            <div class="row w-100">
                
            </div>
            </div>
        </div>
    </div>
    <div className={classes.wraper4Mob}>
        <div style={{"textAlign":"center"}}>
            <p className={classes.cardtitle}>Технологии искусственного интеллекта и анализа данных </p>
            <p className={classes.cardsubtitle}>в проектах ПРИОРИТЕТА 2030 КФУ им. В.И. Венадского</p>
            <p className={classes.cardsubtext}>вы можете оживить проект лишь коснувишсь его</p>
        </div>
            <div class="row"> 
                <div className={classes.wraper4Pad} style={{"position":"relative"}}>
                {/* <img className={classes.projectcardMob} src={zoltan}/> */}
                    <img class="col-12 col-md-4" src={rawpixel}/>
                    <p className={classes.imgincardMob}>Агрополис</p>
                    <p class="col-12 col-md-4" style={{"textAlign":"center"}}>замещение доли импорта биотехнологий в сельском хозяйстве Крыма и РФ</p>
                </div>
                <div className={classes.wraper4Pad}>
                {/* <img className={classes.projectcardMob} src={raeng}/> */}
                    <img class="col-12 col-md-4" src={quattro}/>
                    <p className={classes.imgincardMob}>Цифровизация и искусственный интеллект</p>
                    <p class="col-12 col-md-4" style={{"textAlign":"center"}}>создание центра компетенций в области ИИ, ИТ, больших данных</p>
                </div>
                <div className={classes.wraper4Pad}>
                {/* <img className={classes.projectcardMob} src={ashkan}/> */}
                    <img class="col-12 col-md-4" src={miend}/>
                    <p className={classes.imgincardMob}>Медицина и санаторно-курортная реабилитация</p>
                    <p class="col-12 col-md-4" style={{"textAlign":"center"}}>создание крымской научной школы санаторно-курортной реабилитации в Крыму</p>
                </div>
             </div>
    </div>
    <div className={classes.wrapper4}>
        <div style={{"textAlign":"center"}}>
        <p className={classes.cardtitle}>Технологии искусственного интеллекта и анализа данных </p>
        <p className={classes.cardsubtitle}>в проектах ПРИОРИТЕТА 2030 КФУ им. В.И. Венадского</p>
        <p className={classes.cardsubtext}>вы можете оживить проект лишь коснувишсь его</p>
        </div>
        
        <div class="row w-100">
            <div className={classes.cardblock}>
            <div class="d-flex justify-content-center">
                <div class="col-lg-4 col-12">
                    <div className={classes.cardset}>
                    <img className={classes.projectcard} src={zoltan}/>
                    <img className={classes.imgincard} src={rawpixel}/>

                    <p className={classes.textcard}>Агрополис</p>
                    <p className={classes.subtextcard}>замещение доли импорта биотехнологий в сельском хозяйстве Крыма и РФ
                    </p>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div className={classes.cardset}>
                    <img className={classes.projectcard} src={raeng}/>
                    <img className={classes.imgincard} src={quattro}/>
                    <p className={classes.textcard}>Цифровизация и искусственный интеллект</p>
                    <p className={classes.subtextcard}>создание центра компетенций в области ИИ, ИТ, больших данных</p>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                <div className={classes.cardset}>
                    <img className={classes.projectcard} src={ashkan}/>
                    <img className={classes.imgincard} src={miend}/>
                    <p className={classes.textcard}>Медицина и санаторно-курортная реабилитация
                    </p>
                    <p class={classes.subtextcard}>создание крымской научной школы санаторно-курортной реабилитации в Крыму</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
            <div className={classes.footer}>
                <Footer></Footer>
            </div>   
            </div>
        )
    }
}