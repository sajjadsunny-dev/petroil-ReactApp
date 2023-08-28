import React from 'react'

const Company = () => {
    return (
        <>
            <section class="bg-[#F0F0F0] py-16 md:py-[136px]">
                <div class="max-w-container mx-auto">
                    <div class="md:flex">
                        <div class="bg-primary py-10 px-14 w-full md:w-auto md:py-[100px] md:px-[72px] inline-block">
                            <h3 class="text-4xl font-bold font-pops w-64 text-white">Learn more about our company</h3>
                        </div>
                        <div class="h-[220px] md:h-auto bg-company w-full flex items-center justify-center">
                            <button
                                class="font-pops text-base font-semibold text-primary pt-3.5 pb-[13px] pl-[30px] pr-[30px] bg-white border-2 border-white hover:border-white hover:bg-primary hover:text-white duration-500 ">Learn
                                More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company