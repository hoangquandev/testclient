import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import beforeMobile from "../../../assets/images/banner mobile/beforeMobile.png"
import axios from 'axios';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";



const Banner = () => {
    const [zoom, setZoom] = useState(false)
    const [homeContainer, sethomeContainer] = useState('')
    const [homeContainer2, sethomeContainer2] = useState('')
    const [homeContainer3, sethomeContainer3] = useState('')
    const [homeContainer4, sethomeContainer4] = useState('')
    const [homeContainer5, sethomeContainer5] = useState('')
    const [homeBanner, sethomeBanner] = useState('')
    useEffect(() => {
        const getDetailApi = async () => {
            try {
                const res = await axios.get('http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9');
                sethomeContainer(res.data.homeContainer)
                sethomeBanner(res.data.homeBanner)
                sethomeContainer2(res.data.homeBanner2)
                sethomeContainer3(res.data.homeBanner3)
                sethomeContainer4(res.data.homeBanner4)
                sethomeContainer5(res.data.homeBanner5)
            } catch (error) {
                // dispatch(getProjectListError());
                // toast.error('Kết nối server thất bại! Hảy load lại trang', {
                //     position: "top-center",
                //     autoClose: 3000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                // });
            }
        };
        getDetailApi()
    }, [])
    const zoomable = () => {
        if (window.scrollY > 1) {
            setZoom(true)
        }
    }

    const settings = {
        // infinite: true,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        // draggable:false
    };

    window.addEventListener("scroll", zoomable)

    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

        return { width };
    };

    const viewPort = useViewport();
    const isMobile = viewPort.width <= 640;
    if (isMobile) {
        return (
            <div className='bannerMoblie'>
                <div className='image' id='parallax'>
                    <img src={beforeMobile} alt='' />
                </div>
                <div className='text'>
                    <p className='subSlogan'> Become the leading <br />


                        Design Consulting Company in the Segment
                    </p>
                    <h4 className='slogan'>"Premium & Luxury"</h4>
                </div>

            </div>
        )
    }

    return (
        <div className='container'
            style={zoom ? { transform: "scale(1)", transition: "all 1s linear" } : { transform: "scale(2.7)", transition: "all 1s linear" }}
        >
            {zoom ? <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                    clickable: true,
                    bottom: '-10px'
                }}
                // pagination={true}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                // style={{ paddingBottom: "14px" }}
                style={{
                    "--swiper-pagination-color": "#fe5600",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                  }}
            >
                <SwiperSlide>
                    <div className='zoom' style={{ backgroundImage: `url(${homeContainer})` }}>
                        <div>
                            <Slider className='slider' {...settings}>
                                <div className='sliderItem'>
                                    <img style={{ height: "calc((100vh-120px)/3+22px)" }} src={homeBanner} alt="" />
                                </div>
                                {/* <div className='sliderItem'>
                            <img style={{ height: "calc((100vh-120px)/3+22px)" }} src={image2} alt="" />
                        </div>
                        <div className='sliderItem'>
                            <img style={{ height: "calc((100vh-120px)/3+22px)" }} src={image3} alt="" />
                        </div> */}
                            </Slider>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='zoom' style={{ backgroundImage: `url(${homeContainer2})` }}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='zoom' style={{ backgroundImage: `url(${homeContainer3})` }}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='zoom' style={{ backgroundImage: `url(${homeContainer4})` }}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='zoom' style={{ backgroundImage: `url(${homeContainer5})` }}>

                    </div>
                </SwiperSlide>
            </Swiper>
                : <div className='zoom' style={{ backgroundImage: `url(${homeContainer})` }}>
                    <div>
                        <Slider className='slider' {...settings}>
                            <div className='sliderItem'>
                                <img style={{ height: "calc((100vh-120px)/3+22px)" }} src={homeBanner} alt="" />
                            </div>
                            {/* <div className='sliderItem'>
                            <img style={{ height: "calc((100vh-120px)/3+22px)" }} src={image2} alt="" />
                        </div>
                        <div className='sliderItem'>
                            <img style={{ height: "calc((100vh-120px)/3+22px)" }} src={image3} alt="" />
                        </div> */}
                        </Slider>
                    </div>
                </div>}
        </div >
    )
}

export default Banner