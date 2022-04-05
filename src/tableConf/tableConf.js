import { data } from "browserslist";
import React from "react";
import classes from "./tableConf.css"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


export default function TableConf(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // setItems([])
    const isInitialMount = useRef(true);
    const onBackClick = (e) => {
        const response = fetch("http://localhost:10002/deliteconf", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
          })
          .then(res => res.json())
          .then(
            (result) => {
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
    }, [])    
              if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div>Loading...</div>;
              } else {
                return (
                  <ul>
                    {items.map(item => (
                      <li key={item.id}>
                        Название:{item.Description}<br></br>Описание: {item.Nameconference}<br></br>
                        <button type="submit" onClick={(e)=>{onBackClick(e.target.id)}} id={item.ID} class="btn btn-primary mb-2">Удалить</button>
                      </li>
                    ))}
                  </ul>
                );
              }
}