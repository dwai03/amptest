import React from 'react'
import '../../stylesheets/module.scss'
import PropTypes from 'prop-types'
import {Route, Link } from "react-router-dom";

// Button for Sign up and Learn more on the Landing Page

const Button = ({text}) => {
    let btnType = ''
    let btnRoute = '/'
    switch(text)
    {
        case 'SIGN UP':
            btnType = 'btn_signup'
            btnRoute = '/signup'
            break;
        case 'LEARN MORE':
            btnType = 'btn_learnmore'
            btnRoute = '/learnmore'
            break;
        case 'CREATOR':
            btnType = 'btn_userbtn '
            btnRoute = '/learnmore'
            break;
        case 'MODEL':
            btnType = 'btn_userbtn '
            btnRoute = '/learnmore'
            break;
        case 'INFLUENCER':
            btnType = 'btn_userbtn '
            btnRoute = '/learnmore'
            break;
        case 'NEXT':
            btnType = 'btn_signup'
            break;
    }

    return (
        <Link to = {btnRoute}>
        <button className = {btnType}>
            {text}
        </button>
        </Link>
    )
    
    // if(text == 'LEARN MORE')
    // {
    //     return (
    //         <button className = 'btn_learnmore'>
    //             {text}
    //         </button>
    //     )
    // } 
    // if(text == 'SIGN UP')
    // {
    //     return (
    //         <button className = 'btn_signup'>
    //             {text}
    //         </button>
    //     )
    // } 
    // if(text == 'NEXT')
    // {
    //     return (
    //         <button className = 'btn_signup'>
    //             {text}
    //         </button>
    //     )
    // } 
    // if(text == 'CREATOR')
    // {
    //     return (
    //         <button className = 'btn_userbtn'>
    //             {text}
    //         </button>
    //     )
    // } 
    // if(text == 'MODEL')
    // {
    //     return (
    //         <button className = 'btn_userbtn'>
    //             {text}
    //         </button>
    //     )
    // } 
    // if(text == 'INFLUENCER')
    // {
    //     return (
    //         <button className = 'btn_userbtn'>
    //             {text}
    //         </button>
    //     )
    // } 
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
