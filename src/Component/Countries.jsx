import '../App.css'
const Countries = () => {
    return (
        <div className='mt-16'>
            <h1 className="text-4xl font-bold text-center">Most Popular Countries!</h1>
            <section className='mt-16'>
                <div className=" allspotbg ">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-5xl text-white font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Most Popular Countries!</h1>
                        <p className="mt-6 mb-8 text-white text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <div className="border w-full bg-[url('../../public/images/emosieaoa1671.jpg')]">
                                {/* <img src="../../public/images/emosieaoa1671.jpg" alt="" /> */}
                                <h1 className='text-white p-16'>img</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Countries;