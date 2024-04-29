import '../App.css'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {

    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="slide slide1 items-center">
                        <div className='md:-mt-36'>
                            <h1 className='text-block text-white text-4xl md:text-7xl font-bold text-center p-4'>Discover {' '}
                                <span className='text-[#90D26D]'>
                                    <Typewriter
                                        words={['Your Next Adventure Here!']}
                                        loop={10}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <p className='text-block  text-white text-xl md:text-2xl text-center p-4'>Uncover the World's Wonders: Explore, Experience, and Embrace Adventure with Our Comprehensive Tourism Guide. Start Your Journey Today!</p>
                            <div className='text-center mt-12'>
                                <button type="button" className="mr-4 px-8 py-3 text-xl font-semibold rounded bg-[#90D26D] text-gray-100">Country</button>
                                <button type="button" className="px-8 py-3 text-xl font-semibold border rounded border-[#90D26D] text-[#90D26D]">Discover</button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
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