import React from 'react'
import './Widgets.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widgets({ type }) {
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon: (
                    <PersonOutlineIcon className="icons" style={{ color: "crimson", backgroundColor: "rgba(250, 179, 179, 0.8)" }} />
                )
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all Orders",
                icon: (
                    <ShoppingCartIcon className="icons" style={{ color: "rgba(255, 215, 0, 0.68)", backgroundColor: "rgba(255, 249, 195, 0.99)"}}/>
                )
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View Net Earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className="icons" style={{ color: "rgba(56, 215, 0, 1)", backgroundColor: "rgba(42, 215, 0, 0.27)"}}/>
                )
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Balance",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className="icons" style={{ color: "rgba(183, 0, 255, 0.53)", backgroundColor: "rgba(183, 0, 255, 0.15)"}}/>
                )
            };
            break;
        default:
            break;
    }

    return (
        <div className="widgets">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney ? "$2002" : "281"}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets