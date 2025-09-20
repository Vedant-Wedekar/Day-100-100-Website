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
<CurvedLoop 
  marqueeText=" ✦ Kickstart Your Journey  ✦ with ✦ Ready-to-Use Projects  ✦"
  speed={3}
  curveAmount={500}
  direction="right"
  interactive={true}
  className="custom-text-style -my-100"
/>
     <div className="flex justify-center items-center">

      <div className="align-center">
        <BlurText 
  text="Every big startup begins with a small step, and Studio Nexa is here to make your first step stronger. We provide ready-to-use, attractive, and functional web projects designed especially for students, aspiring entrepreneurs, and small businesses."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8 red"
/>       <BlurText
  text="No hassle, no delays — just simple, affordable, and effective solutions that help you showcase your vision to the world. Whether you’re starting your journey or looking to give shape to your idea, Studio Nexa is your partner in building projects that truly speak for you."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8 red"
/>
                          </div>
      <div className="">     <Cursor/></div>
     </div>
 
 {/* <div className="blue gird justify-center items-center font-extrabold text-3xl ml-120">
  <div className="">At Studio Nexa, we believe every idea deserves</div> 
 <div className="">a strong digital foundation.</div>
 </div> */}

<Para  className="" />




 <div className="flex justify-center px-8">
   <MagicBento />
   <div className="w-200 flex justify-center items-center text-2xl font-medium red">
    <div className="">Our bento grid showcases not just the websites we craft, but the values that power them — creativity, teamwork, client understanding, and real-world experience. Each tile tells a story: from ready-to-use web designs to the passion of our team and the trust we build with every founder. Together, they represent the essence of Studio Nexa — <h1 className="">turning startup dreams into digital reality.</h1></div>
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