import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WithLanguage from "./context/WithLanguage";


ReactDOM.render(
  <BrowserRouter>
    <WithLanguage>
        <App/>
    </WithLanguage>
  </BrowserRouter>,
  document.getElementById('root')
);


