import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const token = window.localStorage.getItem("token")
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
        </Box>

    )
}

export default Home