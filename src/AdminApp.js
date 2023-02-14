import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Footer from './admin/parts/Footer';
import Header from './admin/parts/Header';
// scss
import './App.css';
import './assets/scss/admin.scss';
import { styled } from '@mui/system';

function AdminApp() {
  const [height, setHeightFT] = useState([100, 100])
  const BoxMain = styled('div')({
    paddingTop: height[1] + 'px',
    paddingBottom: height[0] + 'px',
  })
  useEffect(() => {
    let ft = document.getElementById("footer")
    let hd = document.getElementById("header")
    setHeightFT([ft.clientHeight, hd.clientHeight])
  }, [])
  // const main = document.getElementById('main')
  // main.style.paddingTop = height[1] + 'px'
  // main.style.paddingBottom = height[0] + 'px'

  return (
    <Container sx={{
      maxWidth: "414px !important",
      padding: "0px !important",
      position: "relative",
      borderRadius: "7px",
      overflow: "hidden"
    }}>
      <Header />
      <BoxMain
        id="main"
      >
        <Outlet />
      </BoxMain>
      <Footer />
    </Container>
  );
}

export default AdminApp;


