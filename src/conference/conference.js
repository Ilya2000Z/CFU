import React from "react";
import { Col } from "react-bootstrap";
import classes from "./conference.css"

export default function Conference (){

    return (
        <div>
            <Col lg={6}>
            <div class="form-floating mb-3" >
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Введите пароль</label>
                </div>
                <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
                </form>
            </Col>
        </div>
    )
}