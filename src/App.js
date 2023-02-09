import React from 'react';
import {Outlet } from "react-router-dom";

// scss
import './App.css';
import './assets/scss/app.scss';

function App() {
  return (
    <React.Fragment>
        <Outlet />
    </React.Fragment>
  );
}

export default App;


