import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';


export default function Header() {
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
                        News
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
