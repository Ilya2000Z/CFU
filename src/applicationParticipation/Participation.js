import React from "react";
import classes from"./Participation.css"
import { Col, Row } from "react-bootstrap";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router";

export default  function Participation (props){
    const[valueColbac,setValcol]=useState(null)
    const [typeForme, setTypeForme] = useState(false)
    const [idName, setIdName] = useState(props.IdUser);
    const [idConf, setIDconf] = useState(props.IdConf);
    const [city, setCity] = useState()
    const [position, setTypePosition] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [testDock, settestDockail] = useState()
    // const [typeForme, setTypeForme] = useState(false)
    // const [typeForme, setTypeForme] = useState(false)
    // const [typeForme, setTypeForme] = useState(false)
    console.log(props.IdConf)
    console.log(props.idName)
    let navigate= useNavigate()
    const onColback = e =>{
        if(e.target.value==2){
            setTypeForme(true)
            setValcol(e.target.value)

        } else{
            setTypeForme(false)
            setValcol(e.target.value)
        }   
    }

    const test = e =>{
        if(valueColbac!=null){
        if(idName||idConf||city||position||phone||email!=null){
        fetch("http://localhost:10002/uploadData",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([props.IdConf,JSON.parse(props.jwt)[0].ID,city,position,phone,email,typeForme])
        })  .then(res => res.json())
        .then((result)=>{
 
            if(result===false){
                alert("Вы уже подали заявку на участие в этом мероприятии")
            }else{
                setTimeout(()=>{
                var form = document.getElementById("SafePay")
                const testFrom= new FormData(form)
                fetch("http://localhost:10002/upload", {
                    method: 'POST',
                    body: testFrom
                }
            )
            if(typeForme===true){
                var formlection = document.getElementById("lection")
                const testlection = new FormData(formlection)
                fetch("http://localhost:10002/uploadlection", {
                    method: 'POST',
                    body: testlection
                })
            }
            navigate(`/entry/PersonalArea/${JSON.parse(props.jwt)[0].ID}`)
            .then(res => res.json())
                },1000)
            }})
       
        } 
    else{
        alert("Форма не заполнена")
        }}
        else{
            alert("Выбирите тип участия") 
        }
    }

    return(
        <div>
            <Header></Header>
             <Col lg={9} className={classes.regForm} style={{"padding":"30px"}}>
               <div class="form-floating mb-3" >
               <select onChange={e=>{onColback(e)}} class="form-select" aria-label="Default select example">
                    <option selected>Выберите тип участия</option>
                    <option value="1">Без доклада</option>
                    <option value="2">С докладом</option>
                </select>
                    <label for="floatingInput">Тип участия</label>
                </div>
                <Row>
                    <Col lg={4}>
                        <div class="form-floating mb-3">
                            <input  type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label for="floatingPassword">Фамилия</label>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="form-floating mb-3">
                            <input  type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label for="floatingPassword">Имя</label>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="form-floating mb-3">
                            <input  type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label for="floatingPassword">Отчество</label>
                        </div>
                    </Col>
                </Row>
                <div class="form-floating mb-3">
                            <input onChange={e=>{setCity(e.target.value)}} type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label for="floatingPassword">Страна город</label>
                </div>
                <div class="form-floating mb-3">
                            <input onChange={e=>{setTypePosition(e.target.value)}}  type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label for="floatingPassword">Должность</label>
                </div>
                <Row>
                    <Col lg={4}>
                        <div class="form-floating mb-3">
                            <input onChange={e=>{setEmail(e.target.value)}}  type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label for="floatingPassword">Email</label>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="form-floating mb-3">
                            <input onChange={e=>{setPhone(e.target.value)}} type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label  for="floatingPassword">Телефон</label>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="form-floating mb-3">
                            <input  type="text" class="form-control" id="floatingPassword" placeholder="text"/>
                            <label  for="floatingPassword">Рабочий телефон</label>
                        </div>
                    </Col>
                   
                   
                   
                </Row>
                <h3>Загрузка файлов</h3>
                <div class="mb-3">
                    <form id="SafePay">
                    <label for="formFile" class="form-label">Квитанция об оплате</label>
                    <input  class="form-control" onChange={e=>{settestDockail(e.target.files[0])}} type="file" name="myFile" id="formFile"/>
                    </form>
                </div>
                {typeForme?<div class="mb-3">
                <form id="lection">
                    <label for="formFile" class="form-label">Доклад</label>
                    <input  class="form-control" onChange={e=>{settestDockail(e.target.files[0])}} type="file" name="myFile" id="formFile"/>
                    </form>
                </div>:null}
                <Row>
                <Col lg={8}>
                    </Col>
                    <Col log={6}>
                        <div className={classes.singButton}>                           
                                <button type="submit" onClick={test}  class="btn btn-primary">Подать заявку</button>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Footer></Footer>
        </div>
    )
}