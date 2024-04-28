import '../App.css'
import { Navigation } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className="slide slide1">
                    <h1 className='text-block'>Your Home Awaits <br /> Let's Find It Together</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide2">
                    <h1 className='text-block'>Your Home Awaits <br /> Let's Find It Together</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide3">
                    <h1 className='text-block'>Your Home Awaits <br /> Let's Find It Together</h1>
                </div></SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;