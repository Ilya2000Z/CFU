import React from "react";
import classes from "./prodjectlist.css"
import Header from "../header/header";
// import zoltan from "../firstPage/img/zoltan-tasi-eS1omi9_W58-unsplash.jpg"
// import img1 from "../firstPage/img/farmer.png"
// import down from "../firstPage/img/down.png"
// import beatch from "../firstPage/img/beach.png"
// import exhibition from "../firstPage/img/exhibition.png"
// import dna from "../firstPage/img/dna.png"
// import it from "../firstPage/img/it.png"
// import head from "../firstPage/img/head.png"
// import cpu from "../firstPage/img/cpu.png"
// import chart from "../firstPage/img/chart-down.png"
// import spider from "../firstPage/img/image-from-rawpixel-id-3344142-png.png"
// import right from "../firstPage/img/right-arrow.png"
// import journalist from "../firstPage/img/journalist.png"
// import img4 from "../firstPage/img/Рисунок4.png"
// import img2 from "../firstPage/img/Рисунок2.png"
// import img3 from "../firstPage/img/Рисунок3.png"
import zoltan from "../firstPage/img/zoltan-tasi-eS1omi9_W58-unsplash.jpg"
import rawpixel from "../firstPage/img/image-from-rawpixel-id-3397640-png.png"
import raeng from "../firstPage/img/thisisengineering-raeng-sbVu5zitZt0-unsplash.jpg"
import ashkan from "../firstPage/img/ashkan-forouzani-f44b7g7cM7E-unsplash.jpg"
import quattro from "../firstPage/img/image-from-rawpixel-id-2091813-png.png"
import miend from "../firstPage/img/image-from-rawpixel-id-2846934-png.png"

export default function Prodjectlist(props){
    return(
        <div>
        <Header jwt={props.jwt}></Header>
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
    </div>
    )
}