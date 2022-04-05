import react, {useState } from "react";
import classes from "./jwtEntry.css"
import Header from "../header/header";
import Footer from "../Footer/Footer";
import { Col, Row } from "react-bootstrap";
import { useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function JWTEntry(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userInfo, setuserInfo] = useState();
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [errPass, seterrPassd] = useState(false);
    let navigate = useNavigate();
    const items =[]
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    const onBackClick = e => {
        e.preventDefault()
        // navigate(-1);
        const response = fetch("http://localhost:10002/entry", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify([userInfo[0].Email,userInfo[0].Password])
          })
          .then((response) => {
            return response.json()
           })
           .then((data)=> {
            console.log(data[0].JWT.length)
            const now = new Date()
            props.GotoPersaalArea([data[0],now])
            if(data[0].JWT.length!=0){
            navigate(`/entry/PersanalArea/${data[0].ID}`)
            }else{
                navigate("/entry")
                seterrPassd(true)
            }
           })
    } 
    useEffect(() => {
      if(props.jwt!=null){
      fetch("http://localhost:10002/jwtEntry",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify([JSON.parse(props.jwt)[0].JWT ,JSON.parse(props.jwt)[0].ID])
      })
        .then(res => res.json())
        .then(
          (result) => {
            items.push(result[0])
            console.log(items[0].Email)
            setuserInfo(items)
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
      } else {
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
        <div style={{"marginBottom":"100px"}}>
        <Header/>
        </div>
        <div>
        <Col lg={5} className={classes.regForm} style={{"padding":"30px"}}>
           <div class="form-floating mb-3" >
                <input onChange={e=>{setemail(e.target.value)}} value={userInfo[0].Email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            </div>
            <div class="form-floating mb-3">
                <input onChange={e=>{setpassword(e.target.value)}} value={userInfo[0].Password} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Введите пароль</label>
            </div>
            <Row>
            <Col lg={6}>
                <div> 
                    <a className={classes.regBotton} href="/entry/registration" type="submit">Регистрация</a>
                </div>
                <div>
                    {errPass?<div style={{"marginTop":"10px","color":"red"}}>Неверный Email или пароль</div>:null}
                </div>
                </Col>
                <Col log={6}>
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
      );
    }
  }