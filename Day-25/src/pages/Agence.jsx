import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link, useNavigate } from 'react-router-dom'

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
import Rehan from '../components/elements/Rehan'
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


<Rehan />













<div className="flex">
<div className=" flex mt-70 text-[60px] font-[font2] font-extrabold ml-50 z-999">LETS INTRODUCE OUR   <div className="ml-12">SQUAD</div></div>
<CircularText1

  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={10}
  className="custom-class mt-43 -ml-64"
/>

<div className="flex items-center justify-center mr-50 mt-70">
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



{/* <div className="font-[font2] p-10 text-xl">
  Welcome to our dream team a chaotic squad that somehow survived Own Conflicts,  deadlines, caffeine shortages, and each other’s questionable talents , Some also Don't have  Any .

First up, our OLED screen lover boy—he makes PowerPoints so beautiful they could hang in an art gallery. Sadly, no one ever watches them long enough, which breaks his poor pixel-loving heart.

Next, the overrated coder a.k.a.  Lead Developer (self-declared, of course). His coding style is a perfect blend of Ctrl+C, Ctrl+V and blind optimism. Don’t ask us why people love his work—maybe it’s luck, maybe it’s Black Magic, but hey, confidence sells.

Then comes Miss Perfectionist—she loves perfection so much that if her own project isn’t flawless, she’ll happily reject it herself. She’s the thesis queen, the typo hunter, and the person who “slightly” corrects your PPT with the intensity of a brain surgeon.

Our coconut tree—hard outside, soft inside, and taller than most of our ambitions. She’s the Documentation Specialist & Content Writer, which basically means she turns our late-night chaos into “professional” flowcharts and user flows. Without her, we’d just have excuses and memes.

And finally, Member 5 & Member 6—the  duo. Honestly, we don’t know much about these two mother—uh, legends. They’re like NPCs in a game: always noticed, rarely present, but every once in a while they surprisely At time .
     
     </div> */}

<div className="font-[font2] p-10 text-xl space-y-4 leading-relaxed text-gray-800">

  <p className="animate-fadeIn font-extrabold text-2xl   ">
    Welcome to our <span className="font-semibold text-indigo-600">dream team</span> — 
    a chaotic squad that somehow survived deadlines, caffeine shortages, and 
    each other’s questionable talents. Some also don’t have any. 🙂
  </p>

  <p className="hover:scale-105 transition-transform duration-300 px-20">
    First up, our <span className="text-pink-500">OLED screen lover boy</span> — 
    he makes PowerPoints so beautiful they could hang in an art gallery. 
    Sadly, no one ever watches them long enough, which breaks his poor 
    pixel-loving heart.
  </p>

  <p className="hover:scale-105 transition-transform duration-300 px-20">
    Next, the <span className="font-bold text-green-600">overrated coder</span> 
    a.k.a. <i>Lead Developer</i> (self-declared, of course). His coding style is a 
    perfect blend of <code>Ctrl+C</code>, <code>Ctrl+V</code>, and blind optimism. 
    Don’t ask us why people love his work — maybe it’s luck, maybe it’s black 
    magic, but hey, confidence sells.
  </p>

  <p className="hover:scale-105 transition-transform duration-300 px-20">
    Then comes <span className="text-red-500">Miss Perfectionist</span> — she loves 
    perfection so much that if her own project isn’t flawless, she’ll happily 
    reject it herself. She’s the thesis queen, the typo hunter, and the person 
    who “slightly” corrects your PPT with the intensity of a brain surgeon.
  </p>

  <p className="hover:scale-105 transition-transform duration-300 px-20">
    Our <span className="text-yellow-600">coconut tree</span> — hard outside, soft inside, 
    and taller than most of our ambitions 🌴. She’s the Documentation Specialist & 
    Content Writer, which basically means she turns our late-night chaos into 
    “professional” flowcharts and user flows. Without her, we’d just have 
    excuses and memes.
  </p>

  <p className="hover:scale-105 transition-transform duration-300 px-20">
    And finally, <span className="text-indigo-500">Member 5 & Member 6</span> — the duo. 
    Honestly, we don’t know much about these two mother—uh, legends. They’re like 
    NPCs in a game: always noticed, rarely present, but every once in a while 
    they surprise us at the most random times.
  </p>

</div>

<div className="text-[60px] font-[font2] font-extrabold ml-30">LETS  <div className="">MEET</div>  THEM . </div>


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
  handle="TG_VED"
  status="ONLINE"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Vedant-Wedekar", "_blank")}
/>
</div> <div className=" w-100 ">
<ProfileCard
  name="Anushka Chute"
  title="Research Lead & Thesis Writer"
  handle="AC chalado Koi"
  status="ONLINE"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/ANUSHKA-CHUTE", "_blank")}
/>
</div></div>


{/* Second Group  */}

<div className="flex justify-between px-10 py-10">
 <div className=" w-100 ">
<ProfileCard
  name="Palak Kale"
  title="Documentation Specialist & Content Writer"
  handle="IDK"
  status="ONLINE"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://www.instagram.com/_palakkale_/?hl=en", "_blank")}
/>
</div> <div className=" w-100">
<ProfileCard
  name="Prajakta Kohli  "
  title="IDK"
  handle="IDK"
  status="ONLINE"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://www.instagram.com/prajakta_09__/?hl=en", "_blank")}
/>
</div> <div className=" w-100 ">
<ProfileCard
  name="Prachi "
  title="Reviewer & Feedback"
  handle="IDK"
  status="ONLINE"
  contactText="Contact Me"
  avatarUrl="../src/assets/model1.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
   onContactClick={() => window.open("https://github.com/Rehan-the-dev", "_blank")}
/>
</div></div>





























<div className='font-[font2] flex items-center justify-center gap-2 mt-[150px]'>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/'>Home</Link>
      </div>
    </div>

<footer className="flex flex-col md:flex-row justify-between p-8 md:p-16 mt-[200px] bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-800 rounded-t-3xl shadow-xl">
  {/* Left Section */}
  <div className="flex-1">
    <div className="mb-8">
      <p className="text-2xl md:text-3xl font-light mb-6">
        Subscribe to our newsletter to stay in touch with the latest.
      </p>

      {/* Newsletter Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.email;
          if (input.value.trim() !== "") {
            alert(`Subscribed with: ${input.value}`);
            input.value = ""; // reset
          }
        }}
        className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm"
      >
        <input
          aria-label="E-mail address"
          name="email"
          className="bg-transparent w-full text-gray-700 px-4 py-2 focus:outline-none placeholder-gray-400"
          placeholder="Enter your email..."
          type="email"
        />
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 font-medium transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* Social Links */}
    <div className="flex space-x-4 mt-6">
      <a
        className="text-gray-600 hover:text-gray-900 transition-all duration-300"
        href="https://x.com/vedantwedekar"
      >
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 transition-all duration-300"
        href="https://www.linkedin.com/in/vedant-wedekar-8483a1322/"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 transition-all duration-300"
        href="https://www.instagram.com/pvt__.ved/?next=%2F"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 transition-all duration-300"
        href="https://open.spotify.com/playlist/48gpZrlCKwfV2jXB2u1Lo2"
      >
        <i className="fab fa-spotify fa-2x"></i>
      </a>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex-1 mt-8 md:mt-0 md:ml-16">
    <div className="flex justify-between">
      {/* Menu */}
      <div>
        <h2 className="font-bold mb-4 text-gray-900">Menu</h2>
        <ul>
          <li className="mb-2">
            <a className="hover:text-gray-600 transition" href="dd4e36.html#iot">
              About
            </a>
          </li>
          <li className="mb-2">
            <a className="hover:text-gray-600 transition" href="#">
              Donate
            </a>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h2 className="font-bold mb-4 text-gray-900">Support</h2>
        <ul>
          <li className="mb-2">
            <a className="hover:text-gray-600 transition" href="1APT.HTML">
              Privacy Policy
            </a>
          </li>
          <li className="mb-2">
            <a className="hover:text-gray-600 transition" href="NCON.HTML">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

















    </div>
  )
}

export default Agence