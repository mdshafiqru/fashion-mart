import React from 'react';
import './header-top.styles.scss'
import PhoneIcon from '../../assets/phone-icon.png'
import EmailIcon from '../../assets/gmail-icon.png'
import GithubIcon from '../../assets/github-icon.png'
import FacebookIcon from '../../assets/facebook.png'
import LinkedinIcon from '../../assets/linkedin.png'

const HeaderTop = () => (
    <div className='header-top'>
        <div className ='header-top-content'>
            <div className ='left-item'>
                <div className='left-item-option phone-icon'> <a href='tel:+8801937998676'> <img className='icon' src= {PhoneIcon} alt='Phone-Icon'/></a> </div>
                <div className='left-item-option phone-number' ><a href='tel:+8801937998676'>+8801937998676</a> </div>
                <div className='left-item-option vertical-line'>|</div>
                <div className='left-item-option email-icon'> <a href='mailto:mdshafiq.ru@gmail.com'> <img className='icon' src ={EmailIcon} alt='email-icon' /> </a></div>
                <div className='left-item-option email'> <a href='mailto:mdshafiq.ru@gmail.com'>mdshafiq.ru@gmail.com</a> </div>
                
            </div>           
            <div className='right-item'> 
                <div className='social-icon'> 
                    <a href='https://web.facebook.com/mdshafiqru' target="_blank" rel='noopener noreferrer' ><img className=' facebook-con' src={FacebookIcon} alt='facebook-icon' /></a>
                </div>
                <div className='social-icon'>
                    <a href = 'https://github.com/mdshafiqru' target="_blank" rel='noopener noreferrer'><img className='github-con' src={GithubIcon} alt='facebook-icon' /></a>
                </div>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/mdshafiq' target="_blank" rel='noopener noreferrer' ><img className=' linkedin-con' src={LinkedinIcon} alt='facebook-icon' /></a>
                </div>
             
            </div>
        </div>

        
    </div>
)

export default HeaderTop;