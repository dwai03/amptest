import React from 'react'
import './Landing_Page.scss'
import Footer from './../../components/common/Footer'
import Button from './../../components/common/Button'

const Landing_page = () => {
    return (
        <div >
            <div>    
                <div className = 'landingHeaderTitle'>The Future {"\n"}
                                                        of Influencer {"\n"}
                                                        Marketing {"\n"}
                                                        is Here
                    <div className = 'landingHeaderText'>Get consumers talking about your brand and buying {"\n"}
                                                            your products with creator marketing.{"\n"}
                        <Button text={'LEARN MORE'} />
                    </div>
                </div>
            </div>
            <div>
                <img src={require("../../../public/assets/LandingHeaderBackground.jpg")}>
                </img>

                <div className = 'landingBodyTitle'>Only {"\n"}
                                                    Authentic{"\n"}
                                                    Matches
                    <div className = 'landingBodyTextTop'>Reaching new audiences and increasing ROI from your {"\n"}
                                                brand campaigns is at the heart of what we do.  Quickly {"\n"}
                                                match to thousands of influencers based on their {"\n"}
                                                passions and lifestyles, ensuring and authentic expression {"\n"}
                                                of your brand that drives new customer sales.{"\n"}
                        <Button text={'LEARN MORE'} />
                    </div>
                </div>
                
                <img src={require("../../../public/assets/InfluencerIcon.png")}>
                </img>
                <img src={require("../../../public/assets/OptimizeIcon-home.png")}>
                </img>
                <img src={require("../../../public/assets/ReportingIcon-home.png")}>
                </img>
                <div className = 'landingBodyTextQuote'>"A true disruptor {"\n"}
                                                            in the industry"{"\n"}
                    <div className = 'landingBodyTextQuoted'>Joe Smith, Head of Marketing {"\n"}
                        <div className = 'landingBodyTextQuoteReview'>
                                                Something about how we stand out for pros {"\n"}
                                                in the marketing world. Saving them time, {"\n"}
                                                money, and increasing ROI. {"\n"}
                        </div>
                        <Button text={'LEARN MORE'} />
                    </div>
                </div>
            </div>
            <img src={require("../../../public/assets/LandingBodyBackground.jpg")}>
            </img>
            <Footer />
        </div>
    )
}
export default Landing_page
