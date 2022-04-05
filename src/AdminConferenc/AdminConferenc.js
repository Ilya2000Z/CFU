import React from "react";
// import classes from "./AdminConferenc.css"
import HeaderAdmin from "../headerAdmin/headerAdmin";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import TableConf from "../tableConf/tableConf";

export default function AdminConferenc(){
    let navigate = useNavigate();
    const [nameConf, setnameConf] = useState();
    const [about, setabout] = useState();
    const [getTable, setGetTable] = useState(true)

    const responseChek = fetch("http://localhost:10002/check", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      
      .then((response) => {
        return response.json()
       })
       .then((data)=> {
        // props.GotoPersaalArea([data,email])
        console.log(data)
        if(data===false){
      navigate("/error")
        }else{
           
        }
       })

    const onBackClick = e => {
       
    //     e.preventDefault()
    //     // navigate(-1);
    setGetTable(false)
        const response = fetch("http://localhost:10002/confadmin", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([nameConf,about])
          })
          setnameConf("")
          setabout("")
          setTimeout(()=>{setGetTable(true)},100)
    //       .then((response) => {
    //         return response.json()
    //        })
    //        .then((data)=> {
    //         props.GotoPersaalArea([data,email])
    //         if(data.BoolArgument){
    //       navigate("/entry/PersanalArea")
    //         }else{
    //             navigate("/entry")
    //             seterrPassd(true)
    //         }
    //        })
    
    }
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <Row>
                <Col lg={6}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Название</label>
                    <input type="email" onChange={e=>{setnameConf(e.target.value)}} class="form-control" id="exampleFormControlInput1" value={nameConf}/>
                </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Описание конференции</label>
                        <textarea onChange={e=>{setabout(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3" value={about}></textarea>
                    </div>
                    <Row style={{"marginTop":"20px"}}>
                        <Col lg={9}></Col>
                        <Col lg={3}>
                            <button type="submit" onClick={onBackClick} class="btn btn-primary mb-2">Добавить</button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <h3 style={{"textAlign":"center"}}>конференции</h3>
                    <div>
                        {getTable?<TableConf></TableConf>:null}
                    </div>
                </Col>
            </Row>
        </div>
    )
}