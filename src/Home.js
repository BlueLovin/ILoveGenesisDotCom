import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import GenesisHerself from './img/genImages.js';
import ReactAudioPlayer from 'react-audio-player';

function getRandomNumber(){
	return Math.round(Math.random() * (28 - 1) + 1);
}

let index1 = getRandomNumber();
let index2 = getRandomNumber();
let index3 = getRandomNumber();

function threeRandomNumbers(){
	console.log('ass');

	if(index1 === index2 || index1 === index3){
		index2 = getRandomNumber();
		index3 = getRandomNumber();
		threeRandomNumbers();
	}
	if(index2 === index3 || index3 === index1){
		index1 = getRandomNumber();
		index3 = getRandomNumber();
		threeRandomNumbers();
	}
}


function Home(){
    const style={color:'white'};
	threeRandomNumbers();
		return(
			<div>
				<div class="text-center text-white">
                    {/* THIS WAS ACTUALLY HARD !!AF!! TO IMPLEMENT. WHAT THE FUCK */}
					<div class="container p-1">
						<div class="row">
							<div class="col-sm border border-dark text-white">
                    			<img src={GenesisHerself[index1].src} alt="cannot display" height="175px"/>
							</div>
							<div class="col-sm border border-dark text-white">
                    			<img src={GenesisHerself[index2].src} alt="cannot display" height="175px"/>
							</div>
							<div class="col-sm border border-dark text-white">
                    			<img src={GenesisHerself[index3].src} alt="cannot display" height="175px"/>
							</div>
						</div>
					</div>
                

					<div class="container p-3 my-3 bg-info text-white border border-white">
						<h3>Genesis doesn't reveal her deepest interests to me, 
							because she thinks I will judge them.</h3>
					</div>
					<div class="container p-1 my-3 w-50 bg-secondary text-white">
						<h3> However, I want
							to put together what I've noticed she has a passion for.</h3>
					</div>
					<br/>

					<div class="container h1">
						<div class="row bg-dark">
                            
							<div class="col-sm border border-light text-white">
                                <Link style={style} to='/family'>
								    Tia Rosi/Her Sisters
                                </Link>
							</div>
                            
							<div class="col-sm border border-light">
                                <Link style={style} to='/martiw'>
                                    Martiw
                                </Link>								
							</div>

							<div class="col-sm border border-light ">
                                <Link style={style} to='/dante'>
                                    Dante
                                </Link>	
							</div>
						</div>
						<br/>

						<div class="row bg-dark">
							<div class="col-sm border border-light">
                                <Link style={style} to='/raccoons'>
                                    Raccoons
                                </Link>	
							</div>

							<div class="col-sm border border-light">
                                <Link style={style} to='/sunny'>
                                    It's Always Sunny
                                </Link>	
							</div>

							<div class="col-sm border border-light ">
                                <Link style={style} to='/ecuador'>
                                    Ecuador
                                </Link>	
							</div>
						</div>
						<br/>
					</div>
                    <br/>
					<div>
				</div>
				<ReactAudioPlayer
					src={require("./sound/chola.mp3").default}
					controls
				/>
			</div>
			
		</div>
	);
}


export default Home;