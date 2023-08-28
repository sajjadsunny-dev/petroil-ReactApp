import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

const Navbar = () => {


    window.onscroll = () => { scrollFunction() };
    let nav = document.querySelector('.navbar-nav');
    // let hello = Element.currentStyle || window.getComputedStyle(nav),
    //     padding = parseFloat(hello.paddingTop);

    function scrollFunction() {
        let headerHeight = document.querySelector('header').clientHeight;

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar").style.transform = `translateY(-${headerHeight + 2}px)`;
            // document.querySelector(".navbar-nav").style.padding = `${padding - 10}px 0`;
        } else {
            document.querySelector(".navbar").style.transform = `translateY(0)`;
            // document.querySelector(".navbar-nav").style.padding = `27px 0`;
        }
    }

    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className="navbar ease-linear duration-300 fixed w-full z-50">
                <header className="bg-[#282828] py-2 md:pt-4 md:pb-[17px] w-full border-b-[1px] md:border-b-2 border-borderColor">
                    <div className="max-w-container px-2 md:px-0 mx-auto">
                        <div className="flex items-center">
                            <div className='sm:flex'>
                                <a className="flex items-center mb-2 sm:m-0" href="mailto: mail@yourcompany.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M11.875 15H2.5L2.49812 5.56625L9.64437 10.5138C9.74887 10.5861 9.87293 10.6248 10 10.6248C10.1271 10.6248 10.2511 10.5861 10.3556 10.5138L17.5 5.56875V11.25H18.75V5C18.7495 4.66863 18.6176 4.35098 18.3833 4.11666C18.149 3.88235 17.8314 3.7505 17.5 3.75H2.5C2.16858 3.75033 1.85083 3.88213 1.61648 4.11648C1.38213 4.35083 1.25033 4.66858 1.25 5V15C1.2505 15.3314 1.38235 15.649 1.61666 15.8833C1.85098 16.1176 2.16863 16.2495 2.5 16.25H11.875V15ZM16.1244 5L10 9.24L3.87563 5H16.1244Z"
                                            fill="white" />
                                        <path
                                            d="M16.25 17.5009C17.6307 17.5009 18.75 16.3814 18.75 15.0004C18.75 13.6195 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6195 13.75 15.0004C13.75 16.3814 14.8693 17.5009 16.25 17.5009Z"
                                            fill="white" />
                                    </svg>
                                    <p className="font-pops text-white text-xs font-normal ml-[5px] sm:mr-7 md:mr-[54px]">mail@yourcompany.com</p>
                                </a>
                                <a className="flex items-center" href="tel:+896 120 5889">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M15 8.12556H13.75C13.7495 7.62834 13.5518 7.15163 13.2003 6.80004C12.8488 6.44846 12.3721 6.25072 11.875 6.25022V5C12.7035 5.00099 13.4978 5.33061 14.0836 5.91655C14.6694 6.50249 14.999 7.29691 15 8.12556Z"
                                            fill="white" />
                                        <path
                                            d="M17.5001 8.125H16.2501C16.2488 6.96508 15.7875 5.85305 14.9673 5.03287C14.1471 4.21269 13.0351 3.75132 11.8751 3.75V2.5C13.3665 2.50165 14.7963 3.09482 15.8508 4.14935C16.9053 5.20389 17.4985 6.63367 17.5001 8.125ZM16.2501 18.125H16.1439C3.86264 17.4187 2.11889 7.05625 1.87514 3.89375C1.83705 3.39797 1.99745 2.90736 2.32106 2.52983C2.64467 2.1523 3.10499 1.91878 3.60077 1.88063C3.65035 1.87688 3.70014 1.875 3.75014 1.875H7.04389C7.29424 1.87476 7.5389 1.94969 7.74616 2.0901C7.95343 2.23051 8.11377 2.42992 8.20639 2.6625L9.15639 5C9.24786 5.22722 9.27056 5.4763 9.22167 5.71631C9.17278 5.95631 9.05446 6.17667 8.88139 6.35L7.55014 7.69375C7.75725 8.87583 8.32289 9.96561 9.17035 10.8153C10.0178 11.665 11.1061 12.2335 12.2876 12.4437L13.6439 11.1C13.8198 10.9288 14.0423 10.8133 14.2834 10.7677C14.5246 10.7221 14.7739 10.7486 15.0001 10.8438L17.3564 11.7875C17.5855 11.8831 17.7809 12.0446 17.9178 12.2517C18.0547 12.4587 18.1269 12.7018 18.1251 12.95V16.25C18.1251 16.7473 17.9276 17.2242 17.576 17.5758C17.2243 17.9275 16.7474 18.125 16.2501 18.125ZM3.75014 3.125C3.66807 3.12475 3.58675 3.14068 3.51082 3.17186C3.4349 3.20304 3.36586 3.24887 3.30765 3.30673C3.24944 3.36459 3.2032 3.43336 3.17156 3.50909C3.13992 3.58483 3.12352 3.66605 3.12327 3.74813C3.12327 3.76563 3.12389 3.78292 3.12514 3.8C3.41264 7.5 5.25639 16.25 16.2126 16.875C16.3781 16.8849 16.5407 16.8287 16.6647 16.7188C16.7887 16.6088 16.8639 16.4542 16.8739 16.2887L16.8751 16.25V12.95L14.5189 12.0062L12.7251 13.7875L12.4251 13.75C6.98764 13.0687 6.25014 7.63125 6.25014 7.575L6.21264 7.275L7.98764 5.48125L7.05014 3.125H3.75014Z"
                                            fill="white" />
                                    </svg>
                                    <p className="font-pops text-white text-xs font-normal ml-1">+896 120 5889 (Toll free)</p>
                                </a>
                            </div>
                            <div className="sunny flex ml-auto">
                                <a className="p-[5px] " href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M11.7231 9L12.1675 6.10437H9.38908V4.22531C9.38908 3.43313 9.77721 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1385 0 10.0425 0C7.75439 0 6.25877 1.38688 6.25877 3.8975V6.10437H3.71533V9H6.25877V16H9.38908V9H11.7231Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a className="p-[5px] md:ml-[19px]" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M14.3553 4.74113C14.3655 4.88325 14.3655 5.02541 14.3655 5.16753C14.3655 9.50253 11.066 14.4975 5.03553 14.4975C3.17766 14.4975 1.45178 13.9594 0 13.0254C0.263969 13.0558 0.51775 13.066 0.791875 13.066C2.32484 13.066 3.73603 12.5482 4.86294 11.665C3.42131 11.6345 2.21319 10.6904 1.79694 9.39087C2 9.42131 2.20303 9.44162 2.41625 9.44162C2.71066 9.44162 3.00509 9.401 3.27919 9.32997C1.77666 9.02537 0.649719 7.70559 0.649719 6.11169V6.07109C1.08625 6.31475 1.59391 6.46703 2.13194 6.48731C1.24869 5.89847 0.670031 4.89341 0.670031 3.75634C0.670031 3.14722 0.832437 2.58884 1.11672 2.10153C2.73094 4.09138 5.15734 5.39084 7.87812 5.533C7.82737 5.28934 7.79691 5.03556 7.79691 4.78175C7.79691 2.97463 9.25884 1.50256 11.0761 1.50256C12.0202 1.50256 12.873 1.8985 13.472 2.53809C14.2131 2.39597 14.9238 2.12184 15.5532 1.74622C15.3096 2.50766 14.7918 3.14725 14.1116 3.55331C14.7715 3.48228 15.4111 3.2995 15.9999 3.04572C15.5533 3.69544 14.9949 4.27409 14.3553 4.74113Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a className="p-[5px] md:ml-[19px]" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M4.13375 14.0001H1.23125V4.65318H4.13375V14.0001ZM2.68094 3.37818C1.75281 3.37818 1 2.60943 1 1.6813C1 1.23549 1.1771 0.807938 1.49234 0.492701C1.80757 0.177464 2.23513 0.000366211 2.68094 0.000366211C3.12675 0.000366211 3.5543 0.177464 3.86954 0.492701C4.18478 0.807938 4.36188 1.23549 4.36188 1.6813C4.36188 2.60943 3.60875 3.37818 2.68094 3.37818ZM14.9969 14.0001H12.1006V9.45005C12.1006 8.36568 12.0787 6.97505 10.5916 6.97505C9.0825 6.97505 8.85125 8.15318 8.85125 9.37193V14.0001H5.95188V4.65318H8.73562V5.92818H8.77625C9.16375 5.1938 10.1103 4.4188 11.5225 4.4188C14.46 4.4188 15 6.35318 15 8.86568V14.0001H14.9969Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a className="p-[5px] md:ml-[19px]" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M8.00303 4.40623C6.01553 4.40623 4.4124 6.00935 4.4124 7.99685C4.4124 9.98435 6.01553 11.5875 8.00303 11.5875C9.99053 11.5875 11.5937 9.98435 11.5937 7.99685C11.5937 6.00935 9.99053 4.40623 8.00303 4.40623ZM8.00303 10.3312C6.71865 10.3312 5.66865 9.28435 5.66865 7.99685C5.66865 6.70935 6.71553 5.66248 8.00303 5.66248C9.29053 5.66248 10.3374 6.70935 10.3374 7.99685C10.3374 9.28435 9.2874 10.3312 8.00303 10.3312ZM12.578 4.25935C12.578 4.72498 12.203 5.09685 11.7405 5.09685C11.2749 5.09685 10.903 4.72185 10.903 4.25935C10.903 3.79685 11.278 3.42185 11.7405 3.42185C12.203 3.42185 12.578 3.79685 12.578 4.25935ZM14.9562 5.10935C14.903 3.98748 14.6468 2.99373 13.8249 2.17498C13.0062 1.35623 12.0124 1.09998 10.8905 1.04373C9.73428 0.978101 6.26865 0.978101 5.1124 1.04373C3.99365 1.09685 2.9999 1.3531 2.17803 2.17185C1.35615 2.9906 1.10303 3.98435 1.04678 5.10623C0.981152 6.26248 0.981152 9.7281 1.04678 10.8843C1.0999 12.0062 1.35615 13 2.17803 13.8187C2.9999 14.6375 3.99053 14.8937 5.1124 14.95C6.26865 15.0156 9.73428 15.0156 10.8905 14.95C12.0124 14.8968 13.0062 14.6406 13.8249 13.8187C14.6437 13 14.8999 12.0062 14.9562 10.8843C15.0218 9.7281 15.0218 6.2656 14.9562 5.10935ZM13.4624 12.125C13.2187 12.7375 12.7468 13.2094 12.1312 13.4562C11.2093 13.8219 9.02178 13.7375 8.00303 13.7375C6.98428 13.7375 4.79365 13.8187 3.8749 13.4562C3.2624 13.2125 2.79053 12.7406 2.54365 12.125C2.17803 11.2031 2.2624 9.0156 2.2624 7.99685C2.2624 6.9781 2.18115 4.78748 2.54365 3.86873C2.7874 3.25623 3.25928 2.78435 3.8749 2.53748C4.79678 2.17185 6.98428 2.25623 8.00303 2.25623C9.02178 2.25623 11.2124 2.17498 12.1312 2.53748C12.7437 2.78123 13.2155 3.2531 13.4624 3.86873C13.828 4.7906 13.7437 6.9781 13.7437 7.99685C13.7437 9.0156 13.828 11.2062 13.4624 12.125Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <nav className="navbar-nav ease-linear duration-300 bg-primary py-4 md:py-[27px] w-full relative">
                    <div className="max-w-container px-2 md:px-0 mx-auto">
                        <div className="flex items-center">
                            <a href="#"><img src={logo} alt="logo" /></a>

                            <div onClick={() => setToggle(!toggle)} className="nav-toggler md:hidden ml-auto mr-2.5 cursor-pointer text-white block md:hidden rounded-lg p-1 border-2 border-primary hover:border-white duration-500 z-30">
                                <FaBars className='' size='25px' />
                            </div>

                            <div className="ml-auto hidden md:flex items-center">
                                <ul className="flex">
                                    <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                        href="#">Home</a></li>
                                    <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                        href="#">About</a></li>
                                    <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                        href="#">Services</a></li>
                                    <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                        href="#">Gallery</a></li>
                                    <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                        href="#">Blog</a></li>
                                </ul>
                                <button
                                    className="bg-transparent  hover:bg-white  hover:text-primary duration-700 py-3 px-8 border-2 border-white font-pops text-white text-base font-semibold">CONTACT</button>
                            </div>
                            {
                                toggle &&
                                <>
                                    <div className={`nav-items items-center absolute top-full right-0 bg-primary border-l-2 border-b-2 border-borderColor pl-16 pb-10 pr-10 w-[80%] md:hidden ${toggle ? 'translate-x-[1%]' : 'translate-x-[101%]'}`}>
                                        <ul className="md:flex">
                                            <li className=''><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white ml-10 sm:ml-[25%] inline-block"
                                                href="#">Home</a></li>
                                            <li className=''><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white ml-10 sm:ml-[25%] inline-block"
                                                href="#">About</a></li>
                                            <li className=''><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white ml-10 sm:ml-[25%] inline-block"
                                                href="#">Services</a></li>
                                            <li className=''><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white ml-10 sm:ml-[25%] inline-block"
                                                href="#">Gallery</a></li>
                                            <li className=''><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white ml-10 sm:ml-[25%] inline-block"
                                                href="#">Blog</a></li>
                                        </ul>
                                        <button
                                            className="bg-transparent hover:bg-white  hover:text-primary duration-700 py-3 px-8 border-2 border-white font-pops text-white text-base font-semibold mt-5 sm:mt-2 sm:ml-[20%]">CONTACT</button>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Navbar
// nav-items ml-auto md:flex items-center absolute md:static top-full right-0 translate-x-[101%] md:translate-x-0 bg-primary md:bg-transparent border-l-2 border-b-2 md:border-0 border-borderColor pl-16 pb-10 pr-10 pt-3 md:p-0