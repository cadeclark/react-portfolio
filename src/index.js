import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from "./Compenents/NavBar/NavBar.js"
import Content from "./PageContent/content.js"

ReactDOM.render(
  <React.StrictMode>
  <NavBar/>
  <Content/>
  </React.StrictMode>,
  document.getElementById('root')
);


