import React from 'react'

const Signup_Social = () => {
    return (
        <div className = 'signupPage'>
            <div className = 'signupBlock'>
                <div className = 'signupHeader'>
                    Let's Get Connected!
                </div>
                <div className = 'signupDesc'>
                    The next step to being the best creator you can be, is signing up! Start by picking the social {"\n"}
                    platforms that matter most to you OR you can get started with just an email. Whatever you {"\n"}
                    prefer! You’ll be able to add more connections later on too.{"\n"}
                </div>
                <div className = 'signupButtonTypeBlock'>
                    <Button  text={'Facebook'} />
                    <Button  text={'Instagram'} />
                    <Button  text={'Twitter'} />
                    <Button  text={'TikTok'} />
                    <Button  text={'YouTube'} />
                    <Button  text={'Email Address'} />
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

export default Signup_Social
