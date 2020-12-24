import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "./style.css";

function Raccoons(){
    return(
        <div>
            <div class="text-center">
                <img src={require('./img/mapaches/dongsim1.webp').default} height="250px"/>
            </div>
            <br/>
            <div class="text-white container text-center  bg-dark">

                <h4>
                    Genesis always loved raccoons, ever since I met her. I didn't 
                    understand how you could love, what I thought to be at the time,
                    a pest. I thought they were nasty animals. However, once she
                    showed me a ton of cute raccoon videos, I had no choice but
                    to admit that raccoons are the best. 
                </h4>
            </div>
            <br/>
            <div class="text-white text-center container bg-danger rounded w-50">
                <h3>WARNING!!! YOU MAY DIE OF CUTENESS</h3>
            </div>
            <br/>
            <div class="text-center">
                <Link to='/raccoons/images'>
                    <button type="button" class="btn btn-primary btn-lg h">
                        GO!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Raccoons;