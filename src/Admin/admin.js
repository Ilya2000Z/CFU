import React from "react";
import classes from "./admin.css"
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AdminUsers from "../adminUsers/adminUsers";

export default function Admin(props){
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    const [errPass, seterrPassd] = useState(false);
    let navigate = useNavigate();
    const onBackClick = e => {
        e.preventDefault()
        // navigate(-1);
        const response = fetch("http://localhost:10002/entryAdmin", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([username,password])
          })
          .then((response) => {
            return response.json()
           })
           .then((data)=> {
               console.log(data)
            props.GotoPersaalArea(data)
          navigate("/adminCFU/admin")
           })
    }
    return(
        <div>
               <Col lg={5} className={classes.regForm} style={{"padding":"30px"}}>
                <h3>Вход</h3>
               <div class="form-floating mb-3" >
                    <input onChange={e=>{setusername(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">user</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={e=>{setpassword(e.target.value)}} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">password</label>
                </div>
                <Row>
                <Col lg={6}>
                    <div>
                        {errPass?<div style={{"marginTop":"10px","color":"red"}}>Неверный Email или пароль</div>:null}
                    </div>
                    </Col>
                    <Col log={6}>
                        <div className={classes.singButton}>                           
                                <button type="submit" onClick={onBackClick} class="btn btn-primary">Войти в систему</button>
                        </div>
                    </Col>
                </Row>
            </Col>    
        </div>
    )
}