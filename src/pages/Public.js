import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import TopBar from '../common/TopBar'
import AOS from "aos";
// import "aos/dist/aos.css";

const Public = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    }, []);
    useEffect(() => {
        AOS.init({ once: true })
    }, []);
    return (
        <div style={{ position: "relative" }}>
            {/* {
                loading ?
                    (<LoadingPage />)
                    : (
                        <> */}
            <TopBar />
            <Header />
            <Outlet />
            {/* </>
                    )
            } */}
        </div>
    )
}

export default Public