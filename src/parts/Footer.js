import React, { useLayoutEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link, useParams } from 'react-router-dom';
function Footer() {
    const [value, setValue] = React.useState('recents');
    const param = useParams()
    useLayoutEffect(() => {
        let listParam = param["*"]?.split('/')
        if (!listParam)
            setValue('home')
        else {
            if (listParam[0] === 'thanh-toan')
                setValue('payment')
            if (listParam[0] === 'thong-ke')
                setValue('report')
            if (listParam[0] === 'cai-dat')
                setValue('menu')
        }
    }, [param])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            id="footer"
            showLabels
            sx={{
                position: "fixed",
                bottom: "0px",
                width: "100%",
                maxWidth: '414px',
                border: "1px solid #dcdcdc",
                borderRight: 0,
                borderLeft: 0,
                borderBottom: 0
            }}
            value={value}
            onChange={handleChange}
        >

            <BottomNavigationAction
                value="home"
                icon={
                    <Link to="/">
                        <div>
                            <RestoreIcon />
                            <span>Home</span>
                        </div>
                    </Link>
                }
            />



            <BottomNavigationAction
                value="favorites"
                icon={<Link to="/page">
                    <div>
                        <NewspaperIcon />
                        <span>Trang</span>
                    </div>
                </Link>}
            />

            <BottomNavigationAction
                value="report"
                icon={<Link to="/thong-ke">
                    <div>
                        <BarChartIcon />
                        <span>Thống kê</span>
                    </div>
                </Link>}
            />
            <BottomNavigationAction
                value="payment"
                icon={<Link to="/thanh-toan">
                    <div>
                        <PaymentIcon />
                        <span>Thanh toán</span>
                    </div>
                </Link>}
            />
            <BottomNavigationAction
                value="menu"
                icon={<Link to="/cai-dat">
                    <div>
                        <SettingsIcon />
                        <span>Cài đặt</span>
                    </div>
                </Link>} />
        </BottomNavigation>
    );
}

export default Footer;


