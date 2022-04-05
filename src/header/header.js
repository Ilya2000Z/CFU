import React, {useState }  from "react";
import classes from "./header.css"
import logo from "./Logo.png"
import {useNavigate } from "react-router-dom";

export default function Header (props){
    // console.log(JSON.parse(props.jwt)[0].ID)
    const [email, setEmail]=useState()
    const [user, setUser]=useState(false) 
    let navigate = useNavigate()
    function navTo(){
        navigate(`/entry/PersonalArea/${JSON.parse(props.jwt)[0].ID}`)
    }
    if(props.jwt!=null&&Array.isArray(JSON.parse(props.jwt))){
       fetch("http://localhost:10002/getmail",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(JSON.parse(props.jwt)[0].ID)
          })
          .then((response) => {
            return response.json()
           })
           .then((data)=>{
               setEmail(data[0].Email)
               setUser(true)
           })
    }
   const [error, setError] = useState(null);
    
    function EntryExit(){
        if(props.jwt===null){
            setError(true)
            navigate("/entry")
            window.location.reload();
        } else{
            localStorage.clear();
            navigate("/entry")
            window.location.reload();
        }
    }

    return(
        <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand col-lg-1 col-12" href="/"><img class="col-lg-12 col-12" src={logo}></img></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">ГЛАВНАЯ</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/event">МЕРОПРИЯТИЯ</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/prodjectlist">ПРОЕКТЫ</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/partners">ПАРТНЕРЫ</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">КОНТАКТЫ</a>
                            </li>
                        </ul>
                        </div>
                        <a onClick={navTo} style={{"borderBottom":"2px solid maroon"}}>{email}</a>
                        <div style={{"width":"10px"}}></div>
                        <div className={classes.entryBatton}>
                            <button type="submit" onClick={EntryExit}  class="btn btn-default navbar-btn">
                            <i class="fas fa-door-open"></i> {props.jwt===null? "Вход":"Выход"}
                            </button>
                        
                        </div>
                    </div>
                </nav>
        </div>
    )
}