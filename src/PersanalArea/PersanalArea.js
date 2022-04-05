import React, { Component, useEffect } from "react";
import classes from "./PersanalArea.css"
import { Col, Container, Row } from "react-bootstrap";
import { data } from "browserslist";
import Header from "../header/header";
import Footer from "../Footer/Footer";
// import { useEffect } from "react";
import { useState } from "react";
import ListConf from "../listConf/listConf";
import Myconf from "../myconference/myConference";
import { stringify } from "postcss";
import { Link, useNavigate } from "react-router-dom";




export default function PersonalArea(props) {

  let navigate = useNavigate();
 
  function renderComponent(){}
    const [Conf, setConf] = useState();
    const [isLoaded2, setisLoaded2] = useState(false);
    const [error2, seterror2] = useState()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    var arrID=[]
   

    
    
    // console.log(JSON.parse(props.jwt)[0].JWT)
    useEffect(()=>{
      
      if(props.jwt!=null){
        fetch("http://localhost:10002/persanalArea", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([JSON.parse(props.jwt)[0].JWT ,JSON.parse(props.jwt)[0].ID])
            
          })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);  
              console.log(result)
              
                
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
             
            }
          )
          } else{
            navigate("/entry")
          }  
            }, [])
          
                    if (error) {
                      return <div>Error: {error.message}</div>;
                    } else if (!isLoaded) {
                      return <div>Loading...</div>;
                    } else {
                      return (
                        <div>
                            <Header jwt = {props.jwt}/>
                        <div className={classes.Row} >
                        <Col lg={8}>
                            <div className={classes.Welcom}>Добро пожаловать, {items.Nameuser} {items.Surname}. Тут вы можете ознакомиться с программами конференций и подать заявку на участие.</div>
                            <div className={classes.step}>
                            <ListConf arrID={arrID} GetIdConf={props.GetIdConf}></ListConf>
                            </div>
                         </Col>
                         <div className={classes.col4}>
                            <div className={classes.Welcom}>Тут будут ваши конференции</div>
                            <div className={classes.step}>
                              <Myconf  arrID={arrID} jwt={JSON.parse(props.jwt)[0].ID}></Myconf>
                            </div>
                         </div>
                         </div>
                         <div className={classes.Row}>
                         
                          
                          </div>
                         <Footer></Footer>
                     </div>
                      );
                    }
    
        
    }
