/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';


const Hero = () => {
  return (
      <section className='hero'>
          <img src="https://res.cloudinary.com/arikxl/image/upload/v1680391872/Ella2023/yamdyh9zrpk3fmy3e66n.png"
              alt="yochi" className='hero-img' />
          
          <img alt="hot stones" className='stone-img'
              src="https://static.wixstatic.com/media/8120ed_325a36c4a7fa48a1adf537f90f1cf3c1~mv2.png/v1/fill/w_526,h_493,al_c,lg_1,q_85,enc_auto/427-4278494_spa-stone-png-download-massa.png"/>
          <div className='inner-hero'>
              
          </div>
      </section>
  )
}

export default Hero