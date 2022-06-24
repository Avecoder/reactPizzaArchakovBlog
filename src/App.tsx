import './scss/app.scss'
import {useState} from 'react'
import Header from './components/Header'
import {publicRoutes} from './router'
import {Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



function App() {

	return (
	    <div className="wrapper">
					<Header></Header>
					<div className="content">
						<Routes>
							{
								publicRoutes.map(({path, Component}, i) =>
									<Route path={path} element={<Component/>} key={i}></Route>
								)
							}
						</Routes>
					</div>
	    </div>
	);
}

export default App;
