import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="h-screen bg-bannerImage bg-cover bg-repeat bg-center">
                <div className="w-full h-full bg-overlay">
                    <div className="max-w-container px-2 md:px-0 mx-auto h-full flex items-center">
                        <div className="sm:pl-14 md:pl-0 md:mt-20">
                            <h1 className="font-pops text-white font-bold text-[35px] sm:text-5xl md:text-[64px] w-full md:w-[843px] mb-[31px] sm:pr-20 sm:leading-[70px]">We exist since 1975
                                on
                                the oil and
                                gas
                                industry.</h1>
                            <button
                                className="bg-primary  hover:bg-transparent duration-500 py-3 px-8 border-2 border-primary font-pops text-white text-base font-semibold">Learn
                                More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner