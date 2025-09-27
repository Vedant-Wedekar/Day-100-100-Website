import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import W1 from '../assets/Ass1.png'
import W2 from '../assets/Ass2.png'
import W3 from '../assets/Ass3.png'
import W4 from '../assets/Ass4.png'
import W5 from '../assets/Ass5.png'
import W6 from '../assets/Ass6.png'
import W7 from '../assets/Ass7.png'
import W8 from '../assets/Ass8.png'
import W9 from '../assets/Ass9.png'
import W10 from '../assets/Ass10.png';
import W11 from '../assets/Ass11.png';
import W12 from '../assets/Ass12.png';
import W13 from '../assets/Ass13.png';
import W14 from '../assets/Ass14.png';
import W15 from '../assets/Ass15.png';
import ProfileCard from '../components/elements/ProfileCard'
import CircularText1 from '../components/elements/CircularText1'
import Folder from '../components/elements/Folder'
// import Lanyard from '../components/elements/Lanyard'
const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
   W1,
   W2,
   W3,
   W4,
   W5,
   W6,
   W7,
   W8,
   W9,
   W10,
   W11,
   W12,
   W13,
   W14,
   W15,
  
  ]
  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div className='parent'>


      <div id='page1' className='  '>
        <div ref={imageDivRef} className='absolute overflow-hidden mt-130 lg:h-[30vw] h-[70vw] lg:rounded-3xl rounded-xl lg:w-[40vw] w-[25vw] lg:top-96 -top-80 lg:left-[5vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

        <div className='relative font-[font2]'>
                    <div className='lg:mt-[38vh] mt-[30vh]'>
                      <h1 className='text-[18vw] text-center uppercase leading-[18vw]'>Creative<br />
                            Crew</h1>
                    </div>
                       <div className='lg:pl-[50%]  lg:mt-20 mt-4 p-3'>
                     <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re not just an agency; we’re a collective of dreamers, designers, and developers who believe every idea deserves a digital stage. Our crew thrives on creativity and collaboration, blending modern design with smart technology to craft websites that don’t just look good but truly connect with people.</p>
                    </div>
        </div>
      </div>
        <div
        className="gradient-blob w-[400px] h-[700px] -left-40   mt-200  -top-32"
        style={{
          background: "radial-gradient(circle, #dcf5fa, transparent 70%)",
        }}
        aria-hidden="true"
      ></div>
   <div className="">
  <div
        className="gradient-blob w-[500px] h-[600px] mt-250 right-[-10rem] top-80"
        style={{
          background: "radial-gradient(circle, #d5f7e0, transparent 70%)",
        }}
        aria-hidden="true"
      ></div>
    {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
   </div>
{/* cd
      <div id='page2' className=" h-screen">

      </div> */}

      {/* <div className="w-300">
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
</div> */}


<div className="flex">
<div className="mt-70 text-5xl font-[font2] font-extrabold ml-50 z-999">LETS MEET OUR SQUAD</div>
<CircularText1

  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={10}
  className="custom-class mt-50 -ml-25"
/>

<div className="flex items-center justify-center mr-70 mt-70">
  <Folder size={2} color="#ead4fc" className="custom-folder"  
 items={[
    <div
      className="w-full h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('https://picsum.photos/200/300?random=1')" }}
    />,
    <div
      className="w-full h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('https://picsum.photos/200/300?random=2')" }}
    />,
    <div
      className="w-full h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('https://picsum.photos/200/300?random=3')" }}
    />,
  ]}
  />
</div>
</div>



<div className="font-[font2] p-10 text-xl"> We’re not just an agency; we’re a collective of dreamers, designers, and developers who believe every idea deserves a digital stage. Our crew thrives on creativity and collaboration, blending modern design with smart technology to craft websites that don’t just look good but truly connect with people.</div>






{/* First  Group  */}

<div className="flex justify-between px-10 py-10">
 <div className=" w-100 ">
<ProfileCard
  name="Rehan Patel"
  title="Presentation Designer & Research Assistant"
  handle="Rehan-the-dev"
  status="OFFLINE"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div> <div className=" w-100">
<ProfileCard
  name="Vedant Wedekar"
  title="Project Maneger & Lead Developer"
  handle="Code_Ved"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div> <div className=" w-100 ">
<ProfileCard
  name="Anushka Chute"
  title="Research Lead & Thesis Writer"
  handle="Code_Ved"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div></div>


{/* Second Group  */}

<div className="flex justify-between px-10 py-10">
 <div className=" w-100 ">
<ProfileCard
  name="Palak Kale"
  title="Documentation Specialist & Content Writer"
  handle="Code_Ved"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div> <div className=" w-100">
<ProfileCard
  name="Vedant Wedekar"
  title="Web Developer"
  handle="Code_Ved"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div> <div className=" w-100 ">
<ProfileCard
  name="Prachi "
  title="Reviewer & Feedback"
  handle="Code_Ved"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div></div>






















    </div>
  )
}

export default Agence