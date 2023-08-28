import React from 'react'

const Cards = () => {
    return (
        <>
            <section class="bg-[#F0F0F0] pt-[136px] pb-[109px]">
                <div class="max-w-container mx-auto">
                    <div class="flex justify-between">
                        <div class="w-[339px] h-[401px] bg-blog1">
                            <div class="w-full h-full bg-overlay cursor-pointer">
                                <div class="w-full h-full pt-[75px] pl-[46px] pr-11 opacity-0 hover:opacity-100 duration-500">
                                    <h5 class="font-pops text-2xl font-bold text-white leading-10">lorem ipsum dolor sit amet
                                        consectetur
                                        adipiscing elit sed do
                                        eiusmod.
                                    </h5>
                                    <button
                                        class="font-pops text-xs font-semibold text-white py-2.5 px-[22px] bg-[#ffffff80] border-2 border-white hover:border-white hover:bg-white hover:text-primary duration-500 mt-[52px]">Read
                                        More</button>
                                </div>
                            </div>
                        </div>
                        <div class="w-[339px] h-[401px] bg-blog2">
                            <div class="w-full h-full bg-overlay cursor-pointer">
                                <div class="w-full h-full pt-[75px] pl-[46px] pr-11 opacity-0 hover:opacity-100 duration-500">
                                    <h5 class="font-pops text-2xl font-bold text-white leading-10">lorem ipsum dolor sit amet
                                        consectetur
                                        adipiscing elit sed do
                                        eiusmod.
                                    </h5>
                                    <button
                                        class="font-pops text-xs font-semibold text-white py-2.5 px-[22px] bg-[#ffffff80] border-2 border-white hover:border-white hover:bg-white hover:text-primary duration-500 mt-[52px]">Read
                                        More</button>
                                </div>
                            </div>
                        </div>
                        <div class="w-[339px] h-[401px] bg-blog3">
                            <div class="w-full h-full bg-overlay cursor-pointer">
                                <div class="w-full h-full pt-[75px] pl-[46px] pr-11 opacity-0 hover:opacity-100 duration-500">
                                    <h5 class="font-pops text-2xl font-bold text-white leading-10">lorem ipsum dolor sit amet
                                        consectetur
                                        adipiscing elit sed do
                                        eiusmod.
                                    </h5>
                                    <button
                                        class="font-pops text-xs font-semibold text-white py-2.5 px-[22px] bg-[#ffffff80] border-2 border-white hover:border-white hover:bg-white hover:text-primary duration-500 mt-[52px]">Read
                                        More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center mt-7">
                        <h6
                            class="font-pops text-base font-bold text-black mr-1 hover:text-primary duration-500 cursor-pointer">
                            MORE FROM THE
                            BLOG</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards