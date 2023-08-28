import React from 'react'
import './Gallery.css'
import supplier1 from '../../assets/images/supplier1.jpg'
import supplier2 from '../../assets/images/supplier2.jpg'
import supplier3 from '../../assets/images/supplier3.jpg'
import supplier4 from '../../assets/images/supplier4.jpg'

const Gallery = () => {
    return (
        <>
            <section class="gallery max-w-screen mb-[30px]">
                <img class="" src={supplier1} alt="supplier1" />
                <img class="" src={supplier2} alt="supplier2" />
                <img class="" src={supplier3} alt="supplier3" />
                <img class="" src={supplier4} alt="supplier4" />
            </section>
        </>
    )
}

export default Gallery