import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from '../components/Carousel'

function Home() {
    document.title = "ECO"
    return (
        <Box
            sx={{
                background: "red"
            }}
        >
            <h1 style={{margin: '0px'}}>Giời thiệu</h1>
            <div className="HomeCarousel">
                <Carousel />
            </div>
            <div className="HomeCarousel">
                <Carousel />
            </div>
            <div className="HomeCarousel">
                <Carousel />
            </div>
            <div className="HomeCarousel">
                <Carousel />
            </div>
            <div className="HomeCarousel">
                <Carousel />
            </div>
        </Box>

    )
}

export default Home