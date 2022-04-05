import React from "react";
import classes from "../firstPage/firstPage.css"
import img4 from "../firstPage/img/Рисунок4.png"
import img2 from "../firstPage/img/Рисунок2.png"
import img3 from "../firstPage/img/Рисунок3.png"
import Header from "../header/header";

export default function Partners(props){
    return(
        <div>
            <Header jwt={props.jwt}></Header>
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
                    </div>
                </div>
        </div>
    )
}