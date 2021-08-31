import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



import ReactDOM from 'react-dom';

import App from "./App";




//avatar ={user.avatar} 
 // name ={user.name} 
 // tag={user.tag} 
 // location = {user.location} 
 // followers = {user.stats.followers}
//  views = {user.stats.views} 
//  likes = {user.stats.likes}

ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, document.querySelector("#root"),);



