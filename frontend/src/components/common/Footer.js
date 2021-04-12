import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import "./Footer.scss";


const Footer = () => {
    return (
        <div>
            <table className='landingfooter'>
                <tbody>
                    <td className='footercolumn'>Brands & Agencies
                        <tr>      
                            <Link component={RouterLink} to="/">How It Works</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Support</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/workflow">Sign In</Link>
                        </tr>
                    </td>
                    <td className='footercolumn'>Creators & Models
                        <tr>
                            <Link component={RouterLink} to="/workflow">Become a Creator</Link>
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/workflow">Creator Sign In</Link>
                        </tr>
                    </td>
                    <td className='footercolumn'>Learn
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Pricing</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Terms</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Privacy</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Help Center</Link>    
                        </tr>
                    </td>
                    <td className='footercolumn'>Contact
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Contact Us</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Facebook</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Linkedin</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Instagram</Link>    
                        </tr>
                        <tr>
                            <Link component={RouterLink} to="/dashboard">Twitter</Link>    
                        </tr>
                    </td>
                </tbody>
            </table>
            <div className = 'landingfooterbar'>'' </div>
        </div>          
    )
}

export default Footer
