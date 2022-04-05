import react, {useState } from "react";
import classes from "./entrynewpass.css"
import { Col, Row } from "react-bootstrap";
import { Navigate, Route} from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useContext } from "react";
// import { useHistory } from "react-router-dom";
import { data } from "browserslist";
import Header from "../header/header";
import Footer from "../Footer/Footer";

export default function EntrynewPass (props){
    const [userInfo, setuserInfo] = useState();
    const [firstpass, setfirst] = useState(null);
    const [secondpass, setsecond] = useState(null);
    const [errPass, seterrPassd] = useState(false);
    let navigate = useNavigate();
    console.log(props.refpass)
    if(props.jwt===null){
        navigate(`/entry`)
    }
    const onBackClick = e => {
        e.preventDefault()
        // navigate(-1);
        if(secondpass===firstpass){
        const response = fetch("http://localhost:10002/newpassentry", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify([props.code,secondpass])
          })
          localStorage.clear();
          navigate("/")
          .then((response) => {
            return response.json()
           })
           .then((data)=> {
            console.log(data)
           
            // console.log(data[0].JWT.length)
           })} else{
               alert("Пароли не совпадают")
           }
        localStorage.clear();
    } 
   
         return(
            <div>
            <div style={{"marginBottom":"100px"}}>
            <Header jwt={props.jwt}/>
            </div>
            <div>
            <Col lg={5} className={classes.regForm} style={{"padding":"30px"}}>
               <div class="form-floating mb-3" >
                    <input onChange={e=>{setfirst(e.target.value)}} type="password"  class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Введите пароль</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={e=>{setsecond(e.target.value)}} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Повторите пароль</label>
                </div>
                <Row>
                <Col lg={7}>
                </Col>
                    <Col log={5}>
                        <div className={classes.singButton}>                           
                                <button type="submit" onClick={onBackClick} class="btn btn-primary">Изменить</button>
                        </div>
                    </Col>
                </Row>
            </Col>
            </div>
            <div className={classes.footer}>
            </div>
            </div>
        )
    }
