import React, { useLayoutEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Card from './Card'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ListProduct() {
    const Title = styled('h3')({
        marginTop: 0,
        fontSize: '1.25rem'
    })
    const [product, setProduct] = useState([])
    useLayoutEffect(() => {
        let p = []
        for (let i = 0; i < 10; i++) {
            p.push({
                img: 'https://nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg',
                desc: 'Áo thun Unisex tay lỡ form rộng ' + i,
                category: "PRD" + Math.floor(i / 5)
            })
        }
        setProduct(p)
    }, [])
    const handleAdd = () => {
        let p = []
        for (let i = 0; i < 5; i++) {
            p.push({
                img: 'https://nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg',
                desc: 'Áo thun Unisex tay lỡ form rộng ' + i,
                category: "PRD" + Math.floor(i / 5)
            })
        }
        let prd = product.concat(p)
        setProduct(prd)
    }
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    console.log(product)
    return (
        <Box
            sx={{
                background: '#ffffffc9',
                borderRadius: '4px',
                padding: '7px 16px'
            }}
        >
            <Title>Danh sách sản phẩm</Title>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Tìm kiếm sản phẩm"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <Box sx={{ my: '10px' }}>
                <Chip icon={<FaceIcon />} label="Tất cả" size='small' color={'primary'} />
                <Chip icon={<FaceIcon />} label="With Icon" size='small' color={'primary'} />
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    mb: '10px'
                }}>

                <Grid container spacing={2} id="list-product">
                    {product.map((prd, index) => {
                        return (
                            <Grid key={index} xs={6}>
                                <Item sx={{ p: 0 }}>
                                    <Link to='https://shopee.vn/' target='_blank'>
                                        <Card img={prd.img} desc={prd.desc} />
                                    </Link>
                                </Item>
                            </Grid>
                        )
                    })}
                </Grid>

            </Box>
            <Button sx={{ width: '100%' }} variant="contained" onClick={handleAdd}>Xem Thêm</Button>
            {/* <LoadingButton
                sx={{ width: '100%' }}
                onClick={handleClick}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                <span>Xem Thêm</span>
            </LoadingButton> */}
        </Box>
    );
}