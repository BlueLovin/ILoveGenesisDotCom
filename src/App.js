import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import "./style.css";

import Home from './Home.js'
import Raccoons from './Raccoons.js'
import RaccoonImage from './RaccoonImage'
import Family from './Family.js'
import Martiw from './Martiw.js'
import Dante from './Dante.js'
import Sunny from './Sunny.js'
import Ecuador from './Ecuador.js'
import MartiwImages from './MartiwImages.js'



function App(){
	return(
		<Router>
			<div className="App">
				<head>
					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
				</head>
				<body>
					<div class="text-center text-white bg-dark container">
						<Link to='/'><h2>🇪🇨</h2></Link>

						<h1>My Beautiful and Lovely Genesis 😍 😍 😍 </h1>
						<hr></hr>
						<h2>Genesis, my world, my everything</h2>
						<br/>
					</div>
					<br/>
				</body>
			</div>

			<Route path="/" exact component={Home}/>
			<Route path="/raccoons" exact component={Raccoons}/>
			<Route path="/raccoons/images" exact component={RaccoonImage}/>

			<Route path="/martiw" exact component={Martiw}/>
			<Route path="/martiw/images" exact component={MartiwImages}/>

			<Route path="/family" exact component={Family}/>
			<Route path="/dante" exact component={Dante}/>
			<Route path="/sunny" exact component={Sunny}/>
			<Route path="/ecuador" exact component={Ecuador}/>



			
		</Router>
		);
}

export default App;