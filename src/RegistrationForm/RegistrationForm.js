import react, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Registration.css"
import validator from "email-validator"
import { data } from "browserslist";
import Header from "../header/header";
import Footer from "../Footer/Footer";
export default class RegistrationForm extends Component{
    state={
        name:null,
        surname:null,
        eMail:null,
        firstPasword:null,
        secondPassword:null,
        testPasword:"form-control"
    }
    RegFuction=()=>{
        if(this.state.name!=null||this.state.surname!=null||this.state.eMail!=null||this.state.firstPasword!=null||this.state.secondPassword!=null)
        {
            if(validator.validate(this.state.eMail)==true){
                if(this.state.firstPasword!=this.state.secondPassword){
                    this.setState({secondPassword:this.state.secondPassword=""})
                    this.setState({firstPasword:this.state.firstPasword=""})
                    this.setState({testPasword:this.state.testPasword = "FatalPasword"}) 
                }
                else{
                    const response = fetch("http://localhost:10002/registrait", {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify([this.state.name,this.state.surname,this.state.eMail,this.state.firstPasword])
                      })
                      .then((response) => {
                       return response.json()
                      })
                        .then((data)=>{
                            
                            if(data===false){
                                alert("Такой email уже зарегистрирован")
                            }
                            // setTimeout(()=>{this.props.switchPage(data)
                            //     this.props.getEmail(this.state.eMail)},100)
                            }
                        )
                }
            }
            else{
                alert("не корректный email")
            }
            
        }
      }
    render() {
        return (
            <div>
                <Header/>
            <div className={classes.margForm}>
            <Col lg={5} className={classes.regForm} style={{"padding":"30px"}}>
                <Row>
                    <Col lg={6}>
                        <div class="form-floating mb-3" >
                            <input onChange={e=>{this.setState({name:this.state.name=e.target.value})}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Ваше Имя</label>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div class="form-floating mb-3" >
                            <input onChange={e=>{this.setState({surname:this.state.surname=e.target.value})}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Ваша Фамилия</label>
                         </div>
                    </Col>
                </Row>
               <div class="form-floating mb-3" >
                    <input onChange={e=>{this.setState({eMail:this.state.eMail=e.target.value})}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={e=>{this.setState({firstPasword:this.state.firstPasword=e.target.value})}}  type="password" className={this.state.testPasword} id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Введите пароль</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={e=>{this.setState({secondPassword:this.state.secondPassword=e.target.value})}} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Повторите пароль</label>
                </div>
                <Row>
                <Col lg={6}>
                    <div className={classes.chek}> 
                        <div class="form-check" >
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Проверить меня
                            </label>
                        </div>
                    </div>
                    </Col>
                    <Col log={6}>
                        <div className={classes.regButtton}>
                                <a href="/entry/registration/confirmation">
                                <button onClick={this.RegFuction} type="submit" class="btn btn-primary">зарегистрироваться</button>
                                </a>
                        </div>
                    </Col>
                </Row>
            </Col>
            </div>
            <Footer></Footer>
            </div>
        );
    }
}