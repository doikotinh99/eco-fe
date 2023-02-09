import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link, useNavigate } from "react-router-dom";
//component
import Item from '../components/Item'
import { Button } from "@mui/material";
import { axiosInstance } from "../utills/axios";
function Login() {
    const navigate = useNavigate()
    const [action, setAction] = React.useState(true);
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    useEffect(()=>{
        if(token !== null){
            navigate('/')
        }
    }, [token, navigate])
    document.title = "Login"
    const handleLogin = () => {
        let email = document.getElementById('email-login').value;
        let pass = document.getElementById('pass-login').value;
        console.log(email, pass)
        axiosInstance.post('/api/login', {
            email: email,
            password: pass
        })
            .catch((error) => {
                setAction(error)
            })
            .then((response) => {
                if (response['data'].token) {
                    window.localStorage.setItem('token', response['data'].token)
                    setToken(response['data'.token])
                    // navigate('/', { state: { data: response['data'].token } })
                } else {
                    alert('Sai');
                }

            })
    }
    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vh",
            height: "100vh",
            margin: "auto"
        }}>
            <Box
                sx={{
                    p: 0,
                    width: '100%',
                    maxWidth: "375px",
                    my: '15px',
                    mx: "auto",
                    border: '1px solid gray',
                    borderRadius: "5px"
                }}>
                <Item>
                    <h2 style={{ textAlign: "center", fontSize: '1.5rem', fontWeight: '700' }}>Đăng nhập</h2>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: "15px" }}>
                        <EmailIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                        {action ? (<TextField type="email" sx={{ width: "100%" }} id="email-login" label="Địa chỉ email" variant="standard" />)
                            : (<TextField error type="email" sx={{ width: "100%" }} id="email-login" label="Địa chỉ email" variant="standard" />)}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: "15px" }}>
                        <VpnKeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                        {action ? (<TextField type="password" sx={{ width: "100%" }} id="pass-login" label="Mật khẩu" variant="standard" />)
                            : (<TextField error type="password" sx={{ width: "100%" }} id="pass-login" label="Mật khẩu" variant="standard" />)}
                    </Box>

                    <Button sx={{
                        width: '100%',
                        p: "11px",
                        fontWeight: '700',
                        bgcolor: '#f51167',
                        mb: '15px'
                    }} color="error" variant="contained" onClick={handleLogin}>Đăng nhập</Button>
                    <Box sx={{ textAlign: 'right', mb: '15px' }}>
                        <a style={{ display: "inline-block", color: '#007bff', fontWeight: '700' }} href="/">Quên mật khẩu?</a>
                    </Box>
                    <hr />
                    <Box sx={{ textAlign: 'center', mt: "25px" }}>
                        <p>Bạn không có tài khoản? <Link to="/register" style={{ color: '#007bff', fontWeight: 'bold' }}>Đăng ký tại đây</Link></p>
                    </Box>
                </Item>
            </Box>
        </Container >
    )
}

export default Login

// react/product/id
// laravel react => domain, product => action, id=> param 