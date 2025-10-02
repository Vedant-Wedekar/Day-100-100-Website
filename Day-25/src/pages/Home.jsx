import React, { useRef } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Cursor from '../components/elements/Cursor'
import { useEffect, useState } from 'react'
import { ShiftingDropDown } from '../components/elements/ShiftingDropDown'
import  CurvedLoop  from '../components/elements/CurvedLoop'
import  BlurText  from '../components/elements/BlurText'
import { DrawCircleText } from '../components/elements/DrawCircleText'
import CardSwap , { Card }  from '../components/elements/CardSwap'
import ImageTrail from '../components/elements/ImageTrail' 
import MagicBento from '../components/elements/MagicBento'
import Para from '../components/elements/Para'

import W1 from '../assets/Ass1.png'
import W2 from '../assets/Ass2.png'
import W3 from '../assets/Ass3.png'
import W4 from '../assets/Ass4.png'
import W5 from '../assets/Ass5.png'
import W6 from '../assets/Ass6.png'
import W7 from '../assets/Ass7.png'
import W8 from '../assets/Ass8.png'
import ShinyText from '../components/elements/ShinyText'





const Home = () => {
 const [scale, setScale] = useState(1);
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newScale;
      if (scrollY <= 500) {
        newScale = 1 + scrollY / 500; // 1 → 2
      } else if (scrollY <= 1000) {
        newScale = 2 - (scrollY - 500) / 500; // 2 → 1
      } else {
        newScale = 1; // reset after 1000px
      }

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='text-black'>
 
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between mt-50'>
        <HomeHeroText />
      </div>
      <div style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",}} className='h-130 w-200 ml-90 rounded-2xl -mt-100'>
        <Video />
      </div> 


<div className="border-2 mt-20 ml-15 mr-15 py-10 shadow-2xl  rounded-[100px]">




<div className="bg-black w-[700px] h-[130px] rounded-4xl flex justify-center items-center font-[font2] text-[50px] ml-90 gap-4">
  <ShinyText
    text="UNDERSTAND US"
    disabled={false}
    speed={5}
    className="custom-class"
  />

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 62 62"
    className="w-12 h-12 spin-slow"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="home-animate-anything-flower-mobile-a"
        x1="50.449"
        x2=".172"
        y1="74.75"
        y2="20.03"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".144" stopColor="#FFE9FE" />
        <stop offset="1" stopColor="#FF96F9" />
      </linearGradient>
    </defs>

    <path
      fill="url(#home-animate-anything-flower-mobile-a)"
      fillRule="evenodd"
      d="M18.256 30.33c-1.001.211-2.038.322-3.1.322C6.786 30.651 0 23.79 0 15.325S6.785 0 15.155 0s15.156 6.862 15.156 15.326c0 .709-.048 1.406-.14 2.09h1.657c-.092-.684-.14-1.381-.14-2.09C31.689 6.862 38.475 0 46.845 0 55.214 0 62 6.862 62 15.326S55.214 30.65 46.844 30.65c-.94 0-1.862-.086-2.755-.252V31.6a15.083 15.083 0 0 1 2.755-.252C55.214 31.349 62 38.21 62 46.674 62 55.138 55.214 62 46.844 62c-8.37 0-15.155-6.862-15.155-15.326 0-1.074.11-2.123.317-3.135h-1.945c.164.904.25 1.835.25 2.787 0 8.464-6.785 15.326-15.155 15.326S0 54.79 0 46.326 6.785 31 15.155 31c1.063 0 2.1.11 3.1.321v-.99Z"
      clipRule="evenodd"
    />
  </svg>


</div>



     <div className="flex justify-center items-center w-350  px-20">

      <div className="align-center  mt- font-[font2] font-bold">
       
        <div className="font-[font2] text-5xl py-2"> Every big  startup</div>
        <BlurText 
  text=" begins with a small step, and Studio Nexa is here to make your
   first step stronger. We provide ready-to-use, attractive web projects
    designed especially for students, aspiring entrepreneurs, and small businesses.
    No hassle, no delays — just simple, affordable, and effective solutions that help you 
    showcase your vision to the world. Whether you’re starting your journey or looking to
     give shape to your idea, Studio Nexa is your partner in building projects that truly
      "
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl  red"
/>     
        <div className="font-[font2] text-3xl ">~speak for you.</div>


 </div>


      <div className="mt-30">     <Cursor/></div>

     </div></div>
<div className="-mt-60 ">
<CurvedLoop 
  marqueeText=" ✦ Kickstart Your Journey  ✦ with ✦ Ready-to-Use Projects  ✦"
  speed={3}
  curveAmount={500}
  direction="right"
  interactive={true}
  className="custom-text-style -pt-10"
/></div>



 <div className="bg-black w-370 h-220 ml-5 pt-20 rounded-[70px]">
<div className="ml-29  mb-10  ">
<Para className="" /></div>
 <div className="flex justify-center px-8 font-[font2]">
   <MagicBento />
   <div className="w-200 flex justify-center items-center text-white text-2xl font-medium red">
    <div className="font-[font2]">
      <div className="font-[font2] font-extrabold text-3xl"> Our Bento Grid </div>
     showcases not just the websites we
       craft, but the values that power them — creativity, teamwork, client understanding,
        and real-world experience. Each tile tells a story: from ready-to-use web designs
         to the passion of our team and the trust we build with every founder. Together,
          they represent the essence of Studio Nexa — 
          <h1 className="font-[font2] font-extrabold text-3xl">Turning startup dreams into digital reality.</h1></div>
   </div>
 </div>
</div>



<div className="mt-40 mb-40">
<div className=" text-6xl font-bold green">Showcasing the Startup Spark</div>
<div className="text-2xl mt-5">We don’t just build projects, we build possibilities.
Here’s a glimpse of dreams we’ve turned into design.</div>
</div>



<div className='' style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <ImageTrail
    //  key={key}
    items={[
      W1,
      W2,
      W3,
      W4,
      W5,
      W6,
      W7,
      W8,
      // ...
    ]}
    variant={1}
  />


</div>




      <div className="mt-00">    <HomeBottomText /></div>
  
    </div>
  )
}

export default Home