import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    const navigate = useNavigate()
    useEffect(()=>{
        if (token === null) {
            navigate('/login')
        }
    }, [token])
    document.title = "restaurant"

    console.log(token)
    return (
        <React.Fragment>
            <h1>home</h1>
        </React.Fragment>
    )
}

export default Home