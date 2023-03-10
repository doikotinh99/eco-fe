import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from '../utills/axios'
//component
import Item from '../components/Item'
import { Button } from "@mui/material";
import AlertSnackbars from "../components/AlertSnackBars";

function Register() {
    const navigate = useNavigate();
    document.title = "Register"
    const token = (window.localStorage.getItem("token"))
    useEffect(()=>{
        if(token !== null){
            navigate('/')
        }
    }, [token, navigate])
    const [alert, setAlert] = useState(false)
    const register = () => {
        let name = document.getElementById('name-regist').value
        let email = document.getElementById('email-regist').value
        let pass = document.getElementById('pass-regist').value
        let cpass = document.getElementById('conFpass-regist').value
        axiosInstance.post('/api/register', {
            name: name,
            email: email,
            password: pass,
            cpassword: cpass,
        })
            .catch((error) => {
                console.log(error)
            })
            .then((response) => {
                if (response['data'].msg === "success") {
                    setAlert({ action: "success", isAlert: response['data'].msg })
                    setTimeout(() => navigate('/login'), 3000)
                } else {
                    setAlert({ action: "warning", isAlert: response['data'].msg })
                    setTimeout(() => setAlert(false), 6000)
                }

            })
    }
    return (
        <React.Fragment>
            {alert ? <AlertSnackbars action={alert.action} isAlert={alert.isAlert} /> : ""}
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                margin: "auto",
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
                        <h2 style={{ textAlign: "center", fontSize: '1.5rem', fontWeight: '700' }}>????ng k?? t??i kho???n</h2>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: "15px" }}>
                            <PersonIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                            <TextField type="text" sx={{ width: "100%" }} id="name-regist" label="H??? t??n" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: "15px" }}>
                            <EmailIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                            <TextField type="email" sx={{ width: "100%" }} id="email-regist" label="?????a ch??? email" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: "15px" }}>
                            <VpnKeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                            <TextField type="password" sx={{ width: "100%" }} id="pass-regist" label="M???t kh???u" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: "15px" }}>
                            <VpnKeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                            <TextField type="password" sx={{ width: "100%" }} id="conFpass-regist" label="X??c nh???n m???t kh???u" variant="standard" />
                        </Box>
                        <Button sx={{
                            width: '100%',
                            p: "11px",
                            fontWeight: '700',
                            bgcolor: '#f51167',
                            mb: '15px'
                        }} color="error"
                            onClick={register}
                            variant="contained">Sign-up</Button>
                        <hr />
                        <Box sx={{ textAlign: 'center', mt: "25px" }}>

                            <p style={{ marginBottom: "15px" }}>B???n ???? c?? t??i kho???n? <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold' }}>????ng nh???p ngay</Link></p>
                        </Box>
                    </Item>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Register