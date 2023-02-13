import React, { useEffect, useLayoutEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const CheckBrowser = (Browser) => {
    if (Browser.indexOf('MSIE') >= 0) {
        Browser = 'MSIE';
    }
    else if (Browser.indexOf('Firefox') >= 0) {
        Browser = 'Firefox';
    }
    else if (Browser.indexOf('Chrome') >= 0) {
        Browser = 'Chrome';
    }
    else if (Browser.indexOf('Safari') >= 0) {
        Browser = 'Safari';
    }
    else if (Browser.indexOf('Opera') >= 0) {
        Browser = 'Opera';
    }
    else {
        Browser = 'UNKNOWN';
    }
    return Browser;
}

export default function Header() {
    const [value, setValue] = useState("Trang chủ");
    const param = useParams()
    const Browser = navigator.userAgent

    useEffect(()=>{
        if(CheckBrowser(Browser) == 'Safari'){
            alert("Ẩn thanh công cụ để có trải nghiệm tốt nhất")
        }
    }, [])
    useLayoutEffect(() => {
        let listParam = param["*"]?.split('/')
        if (!listParam)
            setValue('Trang chủ')
        else {
            if (listParam[0] === 'thanh-toan')
                setValue('Thanh toán')
            if (listParam[0] === 'thong-ke')
                setValue('Thống kê')
            if (listParam[0] === 'cai-dat')
                setValue('Cài đặt')
        }

    }, [param, Browser])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color=''
                sx={{
                    boxShadow: "0px 0px"
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: "48px !important",
                        padding: "0px 7px !important"
                    }}
                >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {value}
                    </Typography>
                    <Button>
                        <Badge badgeContent={20} color="warning" max={9}>
                            <MailIcon color="info" />
                        </Badge>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
