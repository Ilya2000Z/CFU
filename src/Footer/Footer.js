import React, { Component } from "react";
import classes from "./Footer.css"

export default class Footer extends Component{
    render(){
        return(
            <div>
            
<footer class="page-footer font-small blue pt-4" style={{"position":"absolute","width":"100%"}}>


  <div class="container-fluid text-center text-md-left" style={{"backgroundColor":"#4E80C1","color":"white"}}>

 
    <div class="row">

 
      <div class="col-md-6 mt-md-0 mt-3">

  
        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>


      <hr class="clearfix w-100 d-md-none pb-3"/>

  
      <div class="col-md-3 mb-md-0 mb-3">


        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      
      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      

    </div>


  </div>
  


  <div style={{"backgroundColor":"#2F73CA","color":"white"}} class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
 

</footer>

            </div>
        )
    }
}