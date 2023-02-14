import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, styled } from '@mui/material';
export default function ImgMediaCard(pops) {
    const BtnMxh = styled(Button)({
        padding: '0 7px',
        minWidth: 0,
        'i': {
            fontSize: "40px"
        }
    }
    )
    return (
        <Card
            sx={{
                background: '#ffffffc9'
            }}
        >
            <Avatar sx={{
                width: "140px",
                height: '140px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }} alt="Remy Sharp" src="https://nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', mb: 0 }}>
                    {pops.name}
                </Typography>
                <Typography gutterBottom variant="body" component="div" sx={{ textAlign: 'center' }}>
                    {pops.currentJob}
                </Typography>
                <CardActions>
                    <Box sx={{margin: '0px auto'}}>
                        <Link target={'_blank'} to="https://fb.com/ngoc.keny.0812"><BtnMxh size="medium"><i className="fa-brands fa-facebook"></i></BtnMxh></Link>
                        <Link target={'_blank'} to="https://fb.com/ngoc.keny.0812"><BtnMxh size="medium"><i style={{color: 'rgb(138 68 170)'}} className="fa-brands fa-square-instagram"></i></BtnMxh></Link>
                        <Link target={'_blank'} to="https://fb.com/ngoc.keny.0812"><BtnMxh size="medium"><i style={{color: 'black'}} className="fa-brands fa-tiktok"></i></BtnMxh></Link>
                        <Link target={'_blank'} to="https://fb.com/ngoc.keny.0812"><BtnMxh size="medium"><i className="fa-brands fa-twitter"></i></BtnMxh></Link>
                    </Box>
                </CardActions>
                <Typography variant="body2" color="text.secondary">
                    {pops.desc}
                </Typography>
            </CardContent>

        </Card>
    );
}
