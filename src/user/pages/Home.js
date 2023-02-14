import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from '../components/Profile'
import ListProduct from '../components/ListProduct'
function Home(pops) {
    document.title = pops.subdomain
    return (
        <>
            <Box sx={{ mt: '15px' }}>
                <Profile name={pops.subdomain} desc={'mota'} currentJob={'dev'} />
            </Box>

            <Box sx={{mt: '15px'}}>
                <ListProduct />
            </Box>
        </>

    )
}

export default Home