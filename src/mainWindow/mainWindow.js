import react, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import classes from "./mainWindow.css"
import EntryForm from "../entryForm/entryForm";
import PersonalArea from "../PersanalArea/PersanalArea";
import FirstPage from "../firstPage/firstPage";
import Conference from "../conference/conference";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import { Link } from "react-router-dom";
import Confirmation from "../Confirmation/Confirmation";
import Footer from "../Footer/Footer";
import Admin from "../Admin/admin";
import AdminUsers from "../adminUsers/adminUsers";
import Error404 from "../404Error/Error404";
import AdminConferenc from "../AdminConferenc/AdminConferenc";
import Participation from "../applicationParticipation/Participation";
import JWTEntry from "../JWTEntry/jwtEntry";
import RefreshPasword from "../RefreshPassword/RefreshPassword";
import ConfirmationRef from "../confirmationRef/confirmationRef";
import EntrynewPass from "../entrynewpass/entrynewpass";
import Events from "../events/events";
import Prodjectlist from "../prodjectlist/prodjectlist";
import Partners from "../Partners/Partners";

export default class MainWindow extends Component{

    state = {
        PersanalName:null,
        PersanalSurname:null,
        DataPerson:null,
        emailToreg:null,
        Password:null,
        UserInfo:null,
        idConf:null,
        idUser:null,
        refpass:null,
        coderef:null
        }
    GetIdConf=(a)=>{
        this.setState({idConf:this.state.idConf=a})
    }
    GotoPersaalArea=(a)=>{
        localStorage.setItem('jwt',JSON.stringify(a)); 
        this.setState({UserInfo:this.state.UserInfo=a})
        // this.setState({idUser:this.state.idUser=this.state.UserInfo[0].ID})
    }
    getEmail=(a)=>{
        this.setState({emailToreg:this.state.emailToreg=a})
        console.log(this.state.emailToreg)
        // this.setState({emailToreg:this.state.emailToreg=a]})
    }
    getidtorefpass=(a)=>{
        this.setState({refpass:this.state.refpass=a})
    }
    getcodetorefpass=(a)=>{
        this.setState({refpass:this.state.coderef=a})
    }
    render(){
        let jwt = localStorage.getItem('jwt');
       
        const datenow = new Date()
        console.log(jwt)
        if(jwt!=null){
            if ((new Date(datenow.getTime())-new Date(JSON.parse(jwt)[1]).getTime())>600000)
            {
                localStorage.clear();
                // JSON.parse(jwt).JWT
                // jwt.push(false)
            }
        }
        console.log(this.state.refpass)
        return(
            <div>
                <div>
                    <BrowserRouter>
                                <Routes>
                                    <Route path="/partners" element={<Partners jwt={jwt}/>}/>
                                    <Route path="/prodjectlist" element={<Prodjectlist jwt={jwt}/>}/>
                                    <Route path="/event" element={<Events jwt={jwt}/>}/>
                                    <Route path="/pass/:id" element={<EntrynewPass refpass={this.state.refpass} code={this.state.coderef}  jwt={jwt} />}/>
                                    <Route path="/pass/conf/:id" element={<ConfirmationRef getcodetorefpass={this.getcodetorefpass} refpass={this.state.refpass} jwt={jwt} />}/>
                                    <Route path="/" element={<FirstPage jwt={jwt} />}/>
                                    <Route path="/adminCFU" element={<Admin GotoPersaalArea={this.GotoPersaalArea}/>}/>
                                    <Route path="/adminCFU/admin" element={<AdminUsers jwt={jwt} />}/>
                                    <Route path="/adminCFU/admin/conf" element={<AdminConferenc />}/>
                                    <Route path="/entry/PersonalArea/:id" element={<PersonalArea jwt={jwt}  UserInfo={this.state.UserInfo} GetIdConf={this.GetIdConf}/>} />
                                    <Route path='/entry' element={<EntryForm jwt={jwt}  GotoPersaalArea={this.GotoPersaalArea} getEmail={this.getEmail}/>} />
                                    <Route path='/refpass' element={<RefreshPasword GotoPersaalArea={this.GotoPersaalArea} getidtorefpass={this.getidtorefpass} jwt={jwt} getEmail={this.getEmail}/>} />
                                    <Route path='/entry/:id' element={<JWTEntry jwt={jwt}  GotoPersaalArea={this.GotoPersaalArea} getEmail={this.getEmail}/>} />
                                    <Route path="/entry/registration" element={<RegistrationForm jwt={jwt}   getEmail={this.getEmail} />} />
                                    <Route path="/entry/registration/confirmation" element={<Confirmation jwt={jwt}  emailToreg={this.state.emailToreg} />} />
                                    <Route path="/entry/PersonalArea/conference" element={<Conference jwt={jwt}/>}/>
                                    <Route path="/entry/PersonalArea/conference/participation/:id" element={<Participation IdConf={this.state.idConf} jwt={jwt} IdUser={this.state.idUser} />}/>
                                    <Route path="/adminCFU/users" element={<AdminUsers />}/>
                                    <Route path="/error" element={<Error404 />}/>
                                </Routes>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}