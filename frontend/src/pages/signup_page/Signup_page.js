import React from 'react'
import '../../stylesheets/layout.scss'
import Button from './../../components/common/Button'

const Signup_page = () => {
    return (
        <div className = 'signupPage'>
            <div className = 'signupBlock'>
                <div className = 'signupHeader'>
                    Sign Up
                </div>
                <div className = 'signupDesc'>
                    We service models, influencers, and creators of all types! So to make sure we help you set up the {"\n"}
                    best possible account, which one would you consider yourself to be? Creators differ from just a {"\n"}
                    pure influencer!{"\n"}
                </div>
                <div className = 'signupButtonTypeBlock'>
                    <Button  text={'CREATOR'} />
                    <Button  text={'MODEL'} />
                    <Button  text={'INFLUENCER'} />
                </div>
                <div className = 'signupButtonNext'>
                    <Button  text={'NEXT'} />
                </div>
            </div>
            <div className = 'signupFooter'>
                By signing up you are creating a facets account, and you {"\n"}
                agree to facet’s Term Of Use and Privacy Policy {"\n"}
            </div>
        </div>
    )
}

export default Signup_page
