import React from 'react'

const Services = () => {
    return (
        <>
            <section class="flex flex-wrap">
                <div class="w-full md:w-2/4 px-2.5 h-60 pt-7 md:pl-[220px] md:pt-[104px] md:h-[390px]">
                    <h3 class="text-[42px] mb-4 md:mb-0 md:text-[64px] font-bold font-pops">Our Services</h3>
                    <p class="text-sm md:text-base font-medium font-pops md:w-[405px] text-[#6C6C6C]">It is a long established fact that a
                        reader will be
                        distracted by
                        the readable content of a page
                        when looking at its layout.</p>
                </div>
                <div class="w-full md:w-2/4 h-60 md:h-[390px] bg-servicesImage bg-cover bg-repeat bg-center relative">
                    <div class="bg-overlay w-full h-full pl-4 pt-9 pr-1 md:pr-0 md:pl-[116px] md:pt-[147px] absolute top-0 start-0">
                        <h4 class="font-pops text-[28px] md:text-4xl font-bold text-white mb-[19px]">Modern natural oil and gas refineries.
                        </h4>
                        <button
                            class="font-pops text-base font-semibold text-white px-5 py-2 md:pt-3.5 md:pb-[13px] md:pl-[30px] md:pr-[30px] bg-primary border-2 border-primary hover:border-white hover:bg-transparent duration-500 ">Learn
                            More</button>
                    </div>
                </div>
                <div class="w-full md:w-2/4 h-60 md:h-[390px] bg-servicesImage2 bg-cover bg-repeat bg-center relative">
                    <div class="bg-overlay w-full h-full pl-4 pt-9 pr-1 md:pl-[116px] md:pt-[147px] absolute top-0 start-0">
                        <h4 class="font-pops text-[28px] md:text-4xl font-bold text-white mb-[19px]">Supply of national industries.
                        </h4>
                        <button
                            class="font-pops text-base font-semibold text-white px-5 py-2 md:pt-3.5 md:pb-[13px] md:pl-[30px] md:pr-[30px] bg-primary border-2 border-primary hover:border-white hover:bg-transparent duration-500 ">Learn
                            More</button>
                    </div>
                </div>
                <div class="w-full md:w-2/4 h-60 md:h-[390px] bg-servicesImage3 bg-cover bg-repeat bg-center relative">
                    <div class="bg-overlay w-full h-full pl-4 pt-9 pr-1 md:pl-[116px] md:pt-[147px] absolute top-0 start-0">
                        <h4 class="font-pops text-[28px] md:text-4xl font-bold text-white mb-[19px]">National fuel distribution and supply.
                        </h4>
                        <button
                            class="font-pops text-base font-semibold text-white px-5 py-2 md:pt-3.5 md:pb-[13px] md:pl-[30px] md:pr-[30px] bg-primary border-2 border-primary hover:border-white hover:bg-transparent duration-500 ">Learn
                            More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services