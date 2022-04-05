import React from "react";
import classes from "./RefreshPassword.css"
import Header from "../header/header";
import Footer from "../Footer/Footer";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { data } from "browserslist";
import { Link, useNavigate } from "react-router-dom";


export default function RefreshPasword(props){
    const [email,setemail]=useState()
    const [err,seterr]=useState(false)
    let navigation = useNavigate()
    
    function sendEmail(){
        const response = fetch("http://localhost:10002/refpass",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(email)
          })
          .then((response) => {
            return response.json()
           })
           .then((data)=>{
              if(data===false){
                  seterr(true)
              } else {
                props.getidtorefpass(data)
                props.GotoPersaalArea(data)
                navigation(`/pass/conf/${data}`)
              }
           })
    }
    return(
        <div>
            <div style={{"marginBottom":"100px"}}>
            <Header jwt={props.jwt}/>
            </div>
            <div>
            <Col lg={6} className={classes.regForm} style={{"padding":"30px"}}>
                <h3>Востановление пароля</h3>
                <Row>
               <div class="form-floating mb-3 col-lg-8" >
                    <input onChange={e=>setemail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Введите Email</label>
                </div>
                    <Col lg={4} style={{"marginTop":"10px"}}>
                    <button type="submit" onClick={sendEmail} class="btn btn-primary">Востановить пароль</button>
                    </Col>
                </Row>
                {err?<div style={{"color":"red"}}>Такого аккаунта не существует</div>:null}
            </Col>
            </div>
            <div className={classes.footer}>
            </div>
            </div>
    )
}