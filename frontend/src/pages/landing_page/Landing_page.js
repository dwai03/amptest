import React from 'react'
import './Landing_Page.scss'
import Footer from './../../components/common/Footer'
import Button from './../../components/common/Button'

const Landing_page = () => {
    return (
        <div className = 'image'>
            <img src={require("../../../public/assets/LandingHeaderBackground.jpg")}>
                
            </img>
            <div className = 'landingHeaderTitle'>The Future {"\n"}
                                                    of Influencer {"\n"}
                                                    Marketing is Here</div>
            <div className = 'landingHeaderText'>Get consumers talking about your brand and buying {"\n"}
                                                    your products with creator marketing.</div>
            <Button text={'LEARN MORE'} />

            <img src={require("../../../public/assets/LandingBodyBackground.jpg")}>
            </img>
            <div className = 'landingBodyTitle'>Only {"\n"}Authentic{"\n"}Matches</div>
            <div className = 'landingBodyText'>Reaching new audiences and increasing ROI from your {"\n"}
                                            brand campaigns is at the heart of what we do.  Quickly {"\n"}
                                            match to thousands of influencers based on their {"\n"}
                                            passions and lifestyles, ensuring and authentic expression {"\n"}
                                            of your brand that drives new customer sales.</div>
            <Button text={'LEARN MORE'} />
            <Footer />
        </div>
    )
}
export default Landing_page
