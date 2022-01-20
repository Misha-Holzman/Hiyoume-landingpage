import React, { Component } from 'react'
import './style.css'
import hiyoumeLogoText from '../assets/logo-text.png'
import appleLogo from '../assets/apple.png'
// import hymRoseAsset from '../assets/hym-rose-asset.png'
import standInPhone from '../assets/stand-in-phone.png'
import wavyColorBackground from '../assets/wavy-color-background-purp.png'
import qrCode from '../assets/qr-code-4.png'
import tiktok from '../assets/tiktok.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import videoStandin from '../assets/video-standin.mp4'



class LandingPage extends Component {
  render () {
    return (
      <div className='page-container'>
        <div className='header-div'>
          <img className='logo' src={hiyoumeLogoText} alt='' />
        </div>
        <div className='copy-cta-div'>
          <p className='dating-3-copy'>
          dating 3.0
          </p>
          <a
            href='https://apps.apple.com/us/app/hiyoume-meet-date-play/id1574380956'
            target='_blank'
            className='cta-button-link'
            rel='noopener noreferrer'
          >
            <button className='cta-button'><img className='apple-logo' src={appleLogo} alt='' />download hiyoume</button>
          </a>
        </div>
        <div 
          className='secondary-container-color-div' 
          style={{ 
            background: `url(${wavyColorBackground})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
          }}>
          <div className='phone-video-div'>
            {/* <img className='phone-vid' src={standInPhone} alt='' /> */}
            <video loop="true" autoplay="autoplay" muted="true" id="vid" className='phone-vid'>
              <source src={videoStandin}
              type="video/mp4" />
            </video>
          </div>
          <div className='qr-copy-div'>
            <p className='bottom-header'>
            Join the community.
            </p>
            <p className='bottom-copy'>
            Pushing the bounderies of modern dating to drive deeper connections online, through a video-based community that celebrates self-expression.            </p>
          </div>
          <div className='qr-code-div'>
            <img className='qr-code-img' src={qrCode} alt='' />
            <p className='qr-code-copy'>
            Scan to download iOS
            </p>
          </div>
          <div className='social-links-div'>
            <div className='social-images'>
              {/* <img className='tiktok-img' src={tiktok} alt='' />
              <img className='insta-img' src={insta} alt='' />
              <img className='linkedin-img' src={linkedin} alt='' /> */}
              <a
                href='https://www.tiktok.com/@hiyoumeapp'
                target='_blank'
                className='social-button-link'
                rel='noopener noreferrer'
              >
                <img className='tiktok-img' src={tiktok} alt='' />
              </a>
              <a
                href='https://www.instagram.com/hiyoumeapp/'
                target='_blank'
                className='social-button-link'
                rel='noopener noreferrer'
              >
              <img className='insta-img' src={insta} alt='' />
              </a>
              <a
                href='https://www.linkedin.com/company/hiyoume/'
                target='_blank'
                className='social-button-link'
                rel='noopener noreferrer'
              >
              <img className='linkedin-img' src={linkedin} alt='' />
              </a>
            </div>
            
            {/* <p className='qr-code-copy'>
            follow us
            </p> */}
          </div>
          <div className='legal-copy-div'>
            <div className='legal-links-div'>
              <a
                href='#'
                target='_blank'
                className='legal-copy-links'
                rel='noopener noreferrer'
              >
                Privacy Policy
              </a> 
              <p className='legal-copy-line'> | </p>
              <a
              href='#'
              target='_blank'
              className='legal-copy-links'
              rel='noopener noreferrer'
              >
              Terms of Service
              </a> 
            </div>
            <p className='legal-copy-2'>
            Copyright 2022 hiyoume® • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
