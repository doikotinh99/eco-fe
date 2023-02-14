import React from 'react';
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
// scss
import './App.css';
import './user/assets/scss/app.scss';
import { Box } from '@mui/material';

function SubApp() {

    return (
        <Container sx={{
            maxWidth: "499px !important",
            padding: "0px !important",
            position: "relative",
            borderRadius: "7px",
            overflow: "hidden",
        }}>
            <Box
                id="main"
            >
                <Outlet />
            </Box>
        </Container>
    );
}

export default SubApp;


