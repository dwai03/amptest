import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.scss';
import Button from './Button';


const Footer = () => {
    return (
        <div>
            <ul className='landingfooter'>
                <li className='footercolumn'>Brands & Agencies
                    <ul>
                        <li>      
                            <Link component={RouterLink} to="/">How It Works</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Support</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/workflow">Sign In</Link>
                        </li>
                    </ul>
                </li>
                <li className='footercolumn'>Creators & Models
                    <ul>
                        <li>
                            <Link component={RouterLink} to="/workflow">Become a Creator</Link>
                        </li>
                        <li>
                            <Link component={RouterLink} to="/workflow">Creator Sign In</Link>
                        </li>
                    </ul>    
                </li>
                <li className='footercolumn'>Learn
                    <ul>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Pricing</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Terms</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Privacy</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Help Center</Link>    
                        </li>
                    </ul>
                </li>
                <li className='footercolumn'>Contact
                    <ul>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Contact Us</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Facebook</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Linkedin</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Instagram</Link>    
                        </li>
                        <li>
                            <Link component={RouterLink} to="/dashboard">Twitter</Link>    
                        </li>
                    </ul>
                </li>
            </ul>
            <div className = 'landingfooterbar'>'' </div>
            <Button text={'SIGN UP'}/>
            <Button text={'LEARN MORE'} />
        </div>          
    )
}

export default Footer
