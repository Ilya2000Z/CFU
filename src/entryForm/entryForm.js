import react, {useState } from "react";
import classes from "./entryForm.css"
import { Col, Row } from "react-bootstrap";
import { Navigate, Route} from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useContext } from "react";
// import { useHistory } from "react-router-dom";
import { data } from "browserslist";
import Header from "../header/header";
import Footer from "../Footer/Footer";

export default function EntryForm (props){
    const [userInfo, setuserInfo] = useState();
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [errPass, seterrPassd] = useState(false);
    let navigate = useNavigate();
    if(props.jwt!=null){
        navigate(`/entry/${JSON.parse(props.jwt)[0].ID}`)
    }
    const onBackClick = e => {
        e.preventDefault()
        // navigate(-1);
        const response = fetch("http://localhost:10002/entry", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify([email,password])
          })
          .then((response) => {
            return response.json()
           })
           .then((data)=> {
            console.log(data)
            // console.log(data[0].JWT.length)
           
            if(data!=false){
            if(data[0].JWT.length!=0){
                const now = new Date()
                props.GotoPersaalArea([data[0],now])
            navigate(`/entry/PersonalArea/${data[0].ID}`)
            console.log("work1")
            }}else if(data===false){
                navigate("/entry")
                seterrPassd(true)
                console.log("work2")
            }
           })
    } 
   
         return(
            <div>
            <div style={{"marginBottom":"100px"}}>
            <Header jwt={props.jwt}/>
            </div>
            <div>
            <Col lg={5} className={classes.regForm} style={{"padding":"30px"}}>
               <div class="form-floating mb-3" >
                    <input onChange={e=>{setemail(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={e=>{setpassword(e.target.value)}} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Введите пароль</label>
                </div>
                <Row>
                <Col lg={7}>
                    <Row>
                    <div class="col-lg-4"> 
                        <a className={classes.regBotton} href="/entry/registration" type="submit">Регистрация</a>
                    </div>
                    <div class="col-lg-8"> 
                        <a className={classes.regBotton} href="/refpass" type="submit">Забыли пароль?</a>
                    </div>
                    </Row>
                    <div>
                        {errPass?<div style={{"marginTop":"10px","color":"red"}}>Неверный Email или пароль</div>:null}
                    </div>
                </Col>
                    <Col log={5}>
                        <div className={classes.singButton}>                           
                                <button type="submit" onClick={onBackClick} class="btn btn-primary">Войти в систему</button>
                        </div>
                    </Col>
                </Row>
            </Col>
            </div>
            <div className={classes.footer}>
            <Footer ></Footer>
            </div>
            </div>
        )
    }
