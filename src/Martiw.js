import "./style.css";
import {Link} from 'react-router-dom'
import React, {Component} from 'react';

import Carousel from "react-bootstrap/Carousel";


function Martiw(){
    return(
        <div class="text-center w-75 h-100 container text-white bg-dark">
            <div class="container  rounded p">
						<div class="row">
							<div class="col-sm border rounded border-dark text-white">
                            <img src={require('./img/martiw/1.JPEG').default} alt="cannot display" height="250px"/>
							</div>
							<div class="col-sm border rounded border-dark text-white">
                            <img src={require('./img/genherself/2.JPG').default} alt="cannot display" height="250px"/>
							</div>
						</div>
					</div>
            <br/>
            <h3 class="lead">We met in the library of Shaw High School. We were both 
            skipping class because we were bad ass kids. We have had 
            ups and downs, but we have always been fond of each other.</h3>
            <br/>
            <h4>No matter what happens between us, we come out stronger and better
            than before. Click the button below to have a look at our adventure so far.
            </h4>
            <div class="text-center">
                <Link to='/martiw/images'>
                    <button type="button" class="btn btn-primary btn-lg h">
                        GO!
                    </button>
                </Link>
            </div>
            <br/>
        </div>
    );
}

export default Martiw;