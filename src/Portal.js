import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebars/Sidebar';
import Navbar from './Sidebars/Navbar';
import Footer from './Sidebars/Footer';

function Portal() {
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <div class="container-fluid">
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <Outlet></Outlet>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal