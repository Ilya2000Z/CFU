import React, { Component, useState} from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import classes from "./Confirmation.css"
import Header from "../header/header";
import Footer from "../Footer/Footer";

export default function Confirmation (){

    const [codeEmail, setcodeEmail] = useState(null);
        let navigate = useNavigate();
        const entryCode = e => {
            e.preventDefault()
            // navigate(-1);
            const response = fetch("http://localhost:10002/confirmation", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(codeEmail)
              })
              .then((response) => {
                return response.json()
               })
               .then((data)=> {
                if(data!="false"){
              navigate("/entry")
                }
                else if(data==="false"){
                    alert("неверный код")
                }
               })
            }
    
    
        return(
            <div>
                <Header/>
                <Col lg={5} className={classes.padRaw} style={{"marginTop":"180px"}}>
                    <div className={classes.backContent}>
                        <div  className={classes.ContentName}><div style={{"marginLeft":"20px"}}>Подтверждение регистрации</div></div>
                        <div className={classes.AboutContent}>Введите код отправленный на ваш email:</div>
                        <div className={classes.secondBlock}>
                            <Row>
                                <Col lg={1}></Col>
                                <Col lg={5}>
                                <div class="form-floating mb-3" >
                            <input onChange={e=>{setcodeEmail(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Код</label>
                        </div>
                                </Col>
                                <Col lg={2}></Col>
                                <Col lg={3} style={{"marginTop":"10px"}}>
                                <button class="btn btn-primary" style={{"backgroundColor":"#009900"}} onClick={entryCode}>Подтвердить</button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <div style={{"marginTop":"147px"}}>
                <Footer></Footer>
                </div>
            </div>
        )
    
}