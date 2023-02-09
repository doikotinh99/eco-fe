import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    const navigate = useNavigate()
    useEffect(() => {
        if (token === null) {
            navigate('/login')
        }
    }, [token, navigate])
    document.title = "restaurant"

    console.log(token)
    return (
        <Box
            sx={{
                height: "1000px",
                background: "red"
            }}
        >
            Home
            <Button onClick={()=>{
                localStorage.removeItem('token')
                setToken(null)
            }}>
                Đăng xuất
            </Button>
        </Box>

    )
}

export default Home