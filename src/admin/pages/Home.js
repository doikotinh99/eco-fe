import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from '../components/Carousel'

function Home() {
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    const navigate = useNavigate()
    useEffect(() => {
        if (token === null) {
            navigate('/login')
        }
    }, [token, navigate])
    document.title = "restaurant"
    return (
        <Box
            sx={{
                background: "red"
            }}
        >
            {/* <h1 style={{margin: '0px'}}>subDomain: {subDomain[0]}</h1> */}
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
            <Button onClick={() => {
                localStorage.removeItem('token')
                setToken(null)
            }}>
                Đăng xuất
            </Button>
        </Box>

    )
}

export default Home