import React from "react";
import classes from "./listConf.css"
import { useState } from "react";
import { useEffect } from "react";
import { Col,Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function ListConf(props){
  const [items1, setItems1] = useState();
  const [error2, setError2] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let navigate = useNavigate();
    const onBackClick = e => {
     props.GetIdConf(e.target.id)
      navigate(`/entry/PersonalArea/conference/participation/${e.target.id}`)
    }
    useEffect(() => {
        
        fetch("http://localhost:10002/getdataconf",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
            },
        })
          .then(res => res.json())
          .then(
            (result) => {              
              setItems(result);
              setIsLoaded(true);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          setTimeout(()=>{
        
          },3000)
    }, [])    
              if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div>Loading...</div>;
              } else {
                
                return (
                    <div class="">
                        {items.map(item => (
                            <div className={classes.backContent} key={item.id}>
                             {console.log(props.arrID)}
                                 <div  className={classes.ContentName}><a><div style={{"marginLeft":"20px"}}>{item.Nameconference}</div></a></div>
                                 <div className={classes.AboutContent}>{item.Description}</div>
                                 <div className={classes.secondBlock}>
                                     <Row>
                                         <Col lg={1}></Col>
                                         <Col lg={5}>
                                         <div>Статус:</div>
                                         </Col>
                                         <Col lg={3}></Col>
                                         <Col lg={3}>
                                         
                                <button class="btn btn-primary" id={item.ID} onClick={onBackClick} style={{"backgroundColor":"#009900"}}>Подать заявку</button>
                                         </Col>
                                     </Row>
                                 </div>
                             </div>
                         ))}
                    </div>
                );
              }
}