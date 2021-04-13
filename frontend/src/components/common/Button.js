import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

// Button for Sign up and Learn more on the Landing Page

const Button = ({text}) => {
    
    return (
        <button className = {{text} == 'SIGN UP' ? 'btn_signup' : 'btn_learnmore'}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
