import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Contact() {
    return (
        <div className="contact">
            <div className="contact_wrapper">
                <div className="contact_tag">Be in touch with us</div>
                <div className="contact_item">
                    <input type="text" placeholder='enter you query' />
                    <button>Send</button>
                </div>
                <div className="contact_icons">
                    <Link className='link'><InstagramIcon /></Link>
                    <Link className='link'><GoogleIcon /></Link>
                    <Link className='link'><LinkedInIcon /></Link>
                    <Link className='link'><XIcon /></Link>
                </div>
            </div>
        </div>
    )
}
