import React from 'react'
import './PartnersLogo.css'
import partnerLogo1 from '../../assets/images/Logo1.png'
import partnerLogo2 from '../../assets/images/Logo2.png'
import partnerLogo3 from '../../assets/images/Logo3.png'
import partnerLogo4 from '../../assets/images/Logo4.png'

const PartnersLogo = () => {
    return (
        <>
            <section class="py-9 sm:py-16 md:py-[117px]">
                <div class="max-w-container px-2.5 md:px-0 mx-auto">
                    <div class="logos">
                        <img src={partnerLogo1} alt="partner logo" />
                        <img src={partnerLogo2} alt="partner logo" />
                        <img src={partnerLogo3} alt="partner logo" />
                        <img src={partnerLogo4} alt="partner logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PartnersLogo