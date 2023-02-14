import React, { useLayoutEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';


export default function Header() {
    const [value, setValue] = useState("Trang chủ");
    const param = useParams()
    const Browser = navigator.userAgent

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
            <AppBar
                position="static"
                color=''
                sx={{
                    boxShadow: "0px 0px",
                    position: 'fixed !important',
                    top: '0px',
                    maxWidth: '414px',
                    zIndex: '99'
                }}
                id="header"
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
    );
}
