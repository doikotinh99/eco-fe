import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export default function CardProduct(pops) {
    const CardDesc = styled(Typography)({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    })
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={pops.img}
            />
            <CardContent>
                <CardDesc variant="body2" color="text.secondary">
                    {pops.desc}{pops.desc}
                </CardDesc>
            </CardContent>
        </Card>
    );
}
