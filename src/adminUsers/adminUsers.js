import React from "react";
import classes from "./adminUsers.css"
import HeaderAdmin from "../headerAdmin/headerAdmin";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { stringify } from "postcss";
import { Document, Page } from 'react-pdf';


export default function AdminUsers (props){
    const [error, setError] = useState(null);
    const [error1, setError1] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState();
    let navigate = useNavigate();
    console.log(props.jwt)
    var arrPath=[]
    var arrPathButtton=[]

    function getFileUser(a){

      fetch("http://localhost:10002/aboutUser",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
            },
        body: JSON.stringify(a)
        })
        .then(res => res.json())
        .then((resault)=>{
         console.log(resault)
          arrPath.push(resault);
          // console.log(arrPath[0].Namepath)
          // arrPathButtton.push(`http://localhost:10002/static/${arrPath[0].Namepath}`)
          // arrPathButtton.push(`http://localhost:10002/static/${arrPath[0].Lecture}`)
          // console.log(arrPathButtton)
          setItems1(arrPath)
          setTimeout(()=>{setError1(true);},3000)
        })
    }
    useEffect(()=>{
     
        fetch("http://localhost:10002/admin",{
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
                  setIsLoaded(true);
                  setItems(result);
                  console.log(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  navigate("/adminCFU")
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
        console.log(items1)
        return (
         
        <div>
        <HeaderAdmin></HeaderAdmin>
        <Col lg={5}>
        <table>
        <tr>
        <th>Id</th>
        <th>Фамилия</th>
        <th>Имя</th>
        <th>Email</th>
        </tr>
            {items.map((item,key) => (
                <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.Surname}</td>
                <td>{item.Nameuser}</td>
                <td onClick={e=>getFileUser(e.target.id)} id={item.ID}>{item.Email}</td>
                </tr>
            ))}
        </table>
        {error1?<div>
          {
            items1.map((item2)=>(
              <div>
              <button href={item2.Namepath}>{item2.Namepath}</button>
              <button href={item2.Lecture}>{item2.Namepath}</button>
              <br></br>
              </div>))
          }
              </div>:null
          }
        </Col>
        </div>
        );
      }
}