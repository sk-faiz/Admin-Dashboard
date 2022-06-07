import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'
import './home.scss'

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widget">
                    <Widgets type="user"/>
                    <Widgets type="order"/>
                    <Widgets type="earning"/>
                    <Widgets type="balance"/>
                </div>
            </div>
        </div>
    )
}

export default Home