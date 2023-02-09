import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Footer from './parts/Footer';
import Header from './parts/Header';
// scss
import './App.css';
import './assets/scss/app.scss';
import { Box } from '@mui/material';

function App() {
  const [height, setHeightFT] = useState("100vh")
  useEffect(()=>{
    let ft = document.getElementById("footer")
    setHeightFT(window.outerHeight - ft.clientHeight)
  }, [])
  console.log(height)
  return (
    <Container sx={{
      maxWidth: "414px !important",
      height: "100vh",
      padding: "0px !important",
      position: "relative",
      border: "1px solid #dcdcdc",
      borderRadius: "7px",
      overflow: "hidden"
    }}>
      <Header />
      <Box
        sx={{
          height,
          overflow: "scroll",
        }}
        className="homePage"
      >
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}

export default App;


