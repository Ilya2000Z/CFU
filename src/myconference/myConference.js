import React from "react";
import classes from "./myConference.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import { useEffect } from "react";
import { Col,Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Myconf(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let navigate = useNavigate();
    const onBackClick = e => {
     props.GetIdConf(e.target.id)
      navigate(`/entry/PersonalArea/conference/participation/${e.target.id}`)
    }
    function addlecture(a){
        fetch("http://localhost:10002/addlecture", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
                },
                body: JSON.stringify([props.jwt,a])
        }) 
        .then(res => res.json())
        .then((result)=>{
          if(result===true){
          var form = document.getElementById("SafePay")
          var testFrom= new FormData(form)
          fetch("http://localhost:10002/addlectureFile", {
            method: 'POST',
            body: testFrom
          })
          .then(res => res.json())
          .then((result)=>{
            if(result===true){
                navigate(`/entry/PersonalArea/${props.jwt}`)
              }
            })
          }
        })
    }
    function addPay(a){
      fetch("http://localhost:10002/addlecture", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
              },
              body: JSON.stringify([props.jwt,a])
      }) 
      .then(res => res.json())
      .then((result)=>{
        if(result===true){
        var form = document.getElementById("SafePay")
        var testFrom= new FormData(form)
        fetch("http://localhost:10002/addpayFile", {
          method: 'POST',
          body: testFrom
        })
        .then(res => res.json())
        .then((result)=>{
          if(result===true){
              navigate(`/entry`)
            }
          })
        }
      })
  }
    useEffect(() => {
        
        fetch("http://localhost:10002/myconf",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
            },
            body: props.jwt
        })
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result)
            result.map((item)=>{props.arrID.push(item.idConf)})
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])    
              if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div>Loading...</div>;
              } else {
                  console.log(items)
                return (
                
                        <div>
                        {items.map(item => (
                        <Col lg={12}>
                             <div className={classes.backContent}>
                                 <div  className={classes.ContentName}><a><div style={{"marginLeft":"20px"}}>{item.NmaeConf}</div></a></div>
                                 <div className={classes.AboutContent}> {item.Description}</div>
                                 <div className={classes.secondBlock}>
                                     <Row>
                                     <Col lg={5} xs={5}>
                                        {item.TypeForme!="false"?<Popup trigger={item.Lecture===null?<button class="btn btn-primary" id={item.idConf} style={{"backgroundColor":"#009900"}}>Добавить доклад</button>:null} position="right center" modal nested>
                                        {close => (
                                            <div className={classes.modal}>
                                                <button className={classes.close} onClick={close}>
                                                &times;
                                                </button>
                                                <div className={classes.header}>Добавить доклад</div>
                                                        <div class="mb-3">
                                                            <form id="SafePay">
                                                                <input  class="form-control" type="file" name="myFile" id="formFile"/>
                                                            </form>
                                                        </div>
                                                        <button class="btn btn-primary" id={item.idConf} onClick={e=>addPay(e.target.id)} style={{"backgroundColor":"#009900"}}>Добавить доклад</button>                               
                                                </div>
                                             )}
                                        </Popup>:null} 
                                         </Col>
                                         <Col lg={1} xs={1}></Col>
                                         <Col lg={6} xs={6}>
                                       {item.Namepath==null?<Popup className={classes.popcenter} trigger={<button class="btn btn-primary" id={item.idConf}  style={{"backgroundColor":"#009900"}}>Добавить квитанцию</button>} position="right center" modal nested>
                                       {close => (
                                            <div className={classes.modal}>
                                                <button className={classes.close} onClick={close}>
                                                &times;
                                                </button>
                                                <div className={classes.header}>Добавить квитанцию</div>
                                                        <div class="mb-3">
                                                            <form id="SafePay">
                                                                <input  class="form-control" type="file" name="myFile" id="formFile"/>
                                                            </form>
                                                        </div>
                                                        <button class="btn btn-primary" id={item.idConf} onClick={e=>addlecture(e.target.id)} style={{"backgroundColor":"#009900"}}>Добавить квитанцию</button>                               
                                                </div>
                                             )}
                                        </Popup>:null}  
                                         </Col>
                                     </Row>
                                     
                                     {/* <Row>
                                         <Col lg={1}></Col>
                                         <Col lg={5}>
                                         <div>Статус:</div>
                                         </Col>
                                         <Col lg={3}></Col>
                                         <Col lg={3}>
                                         <button class="btn btn-primary" id={item.ID} onClick={onBackClick} style={{"backgroundColor":"#009900"}}>Подать заявку</button>
                                         </Col>
                                     </Row> */}
                                 </div>
                             </div>
                         </Col>
                         ))}
                         </div>
                 
                );
              }
}