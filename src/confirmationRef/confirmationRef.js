import React, { Component, useState} from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from "./confirmationRef.css"
import Header from "../header/header";
import Footer from "../Footer/Footer";

export default function ConfirmationRef (props){

    const [code, setcode] = useState(null);
        let navigate = useNavigate();
        const entryCode = e => {
            console.log("hyera")
            e.preventDefault()
            // navigate(-1);
            const response = fetch("http://localhost:10002/switchpass", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify([props.refpass, code])
              })
              .then((response) => {
                return response.json()
               })
               .then((data)=> {
                console.log(data)
                if(data.length!=0){
                    props.getcodetorefpass(data)
              navigate(`/pass/${data}`)
                }
               })
            }
    
    
        return(
            <div>
                <Header/>
                <div style={{"marginTop":"150px"}}>
                <Col lg={5} className={classes.padRaw}>
                    <div className={classes.backContent}>
                        <div  className={classes.ContentName}><div style={{"marginLeft":"20px"}}>Востановление пароля</div></div>
                        <div className={classes.AboutContent}>Введите код отправленный на ваш email:</div>
                        <div className={classes.secondBlock}>
                            <Row>
                                <Col lg={1}></Col>
                                <Col lg={5}>
                                <div class="form-floating mb-3" >
                            <input onChange={e=>{setcode(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Код</label>
                        </div>
                                </Col>
                                <Col lg={2}></Col>
                                <Col lg={3} style={{"marginTop":"10px"}}>
                                <button class="btn btn-primary" onClick={entryCode} style={{"backgroundColor":"#009900"}} >Подтвердить</button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                </div>
                <div style={{"marginTop":"147px"}}>
                <Footer></Footer>
                </div>
            </div>
        )
    
}