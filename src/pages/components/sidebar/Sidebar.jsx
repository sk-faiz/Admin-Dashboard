import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

function Sidebar() {
    return (<>
        <div className="sidebar">
            <div className="top">
                <span className="logo">Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2OutlinedIcon className="icon"/>
                        <span>Product</span>
                    </li>
                    <li>
                        <CreditCardOutlinedIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">INSIGHTS</p>
                    <li>
                        <EqualizerIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <p className="title">SETTING</p>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LoginOutlinedIcon className="icon"/>
                        <span>Log out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    </>)
}

export default Sidebar