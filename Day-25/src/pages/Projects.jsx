import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import InfiniteMenu  from '../components/elements/InfiniteMenu'
import Btn from '../components/elements/Btn'
import bg from '../assets/bg.jpg'
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
import { HoverImageLinks } from '../components/elements/HoverImageLinks'
const items = [
 { image: W1, link: 'https://google.com/', title: 'Item 1', description: 'This is pretty cool, right?' , dp:'https://static.wikia.nocookie.net/the-lady-of-eldia/images/4/43/Eren_Jaeger_%28850%29.png/revision/latest?cb=20201217121151'}, 
  { image: W2, link: 'https://google.com/', title: 'Item 2', description: 'This is pretty cool, right?' },
  { image: W3, link: 'https://google.com/', title: 'Item 3', description: 'This is pretty cool, right?' },
  { image: W4, link: 'https://framer.com/projects/Groomify-copy--cJNYPSyiFN8POVNi59FQ-d5J1O?node=augiA20Il', title: 'Item 4', description: 'This is pretty cool, right?' },
  { image: W5, link: 'https://google.com/', title: 'Item 5', description: 'This is pretty cool, right?' },
  { image: W6, link: 'https://google.com/', title: 'Item 6', description: 'This is pretty cool, right?' },
  { image: W7, link: 'https://framer.com/projects/Artemis-copy--8Wsd1TMDDI3cZIXla38C-gr4u6?node=GvB3jHHOH', title: 'Item 7', description: 'This is pretty cool, right?' },
  { image: W8, link: 'https://google.com/', title: 'Item 8', description: 'This is pretty cool, right?' },
  { image: W9, link: 'https://framer.com/projects/Vedant-Portfolio--2JXR7eM0682fpZTEK3ix-9NXGq?node=augiA20Il', title: 'Item 9', description: 'This is pretty cool, right?' },
  { image: W10, link: 'https://google.com/', title: 'Item 10', description: 'This is pretty cool, right?' },
  { image: W11, link: 'https://google.com/', title: 'Item 11', description: 'This is pretty cool, right?' },
  { image: W12, link: 'https://google.com/', title: 'Item 12', description: 'This is pretty cool, right?' },
  { image: W13, link: 'https://framer.com/projects/SAVORIA-copy--bmSpzMUSXzCPgZ9OekA1-irAyz?node=K526egY5_', title: 'Item 13', description: 'This is pretty cool, right?' },
  { image: W14, link: 'https://framer.com/projects/HypeApp-Landing-Page-copy--k1oQDwUeeTc6Y5cBdmAG-3RyUk?node=augiA20Il', title: 'Item 14', description: 'This is pretty cool, right?' , dp:'https://static.wikia.nocookie.net/the-lady-of-eldia/images/4/43/Eren_Jaeger_%28850%29.png/revision/latest?cb=20201217121151'},
  { image: W15, link: 'https://google.com/', title: 'Item 15', description: 'This is pretty cool, right?' },
];
const Projects = () => {
const projects = [
   {
    image1: W2,
    image2: W4,
    title1: "Business Portfolio",
    title2: "Creative Agency",
    link1: "https://example.com/project1",
    link2: "https://framer.com/projects/Groomify-copy--cJNYPSyiFN8POVNi59FQ-d5J1O?node=augiA20Il"
  },
  {
    image1: W1,
    image2: W3,
    title1: "Personal Blog",
    title2: "Photography Studio",
    link1: "https://example.com/project3",
    link2: "https://framer.com/projects/portfolite-copy--hWbZ8ai5MV33VMVPMMyp-h9LEK?node=augiA20Il"
  },
  {
    image1: W5,
    image2: W6,
    title1: "E-Commerce Store",
    title2: "Restaurant Landing"
  }
]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0   /////i did some change     0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -100%',
        scrub: -10
      }
    })
  })
  return (
    <div className="">
    <div className='lg:p-4 p-2'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Websites</h2>
     

<div className=" mt-1  mb-35 font-[font2] text-2xl  ">
        <h1>Launch your startup online in minutes with STUDIO NEXA’s free,
           ready-to-use websites. Choose from modern templates built by our 
           team, then easily customize your name, content, and design — just 
           like editing in Figma, no coding required. Each site is optimized 
           for speed, SEO, and mobile, so your brand looks professional from day one.</h1>

</div>
      </div>



      <div className="font-[font2]  text-7xl uppercase mb-20">Crafted for Visionaries ✨</div>



      <div className='-lg:mt-20 lol'>
     {projects.map((elem, idx) => (
  <div key={idx} className='hero w-full lg:h-[550px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
  <ProjectCard
  image1={elem.image1}
  image2={elem.image2}
  title1={elem.title1}
  title2={elem.title2}
  link1={elem.link1}
  link2={elem.link2}
/>

  </div>
))}
      </div>
      </div>


  
<div className="w-full ">
  <div
    className="text-white font-[font2] text-4xl uppercase flex flex-col items-center justify-center text-center h-[600px] bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: `url(${bg})` }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

    {/* Glow effect */}
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-800 opacity-20 rounded-full blur-3xl"></div>

    {/* Main text */}
    <span className="relative space z-10 mb-6">👨‍🚀 Choices Website From Your Orbit 🪐</span>

    {/* Paragraph */}
    <p className="relative text-xl text-gray-400 z-10 max-w-3xl text-center leading-relaxed px-6">
      Your task is simple: select a website template that effectively represents your startup and engages your audience.
      Our 3D interactive menu allows you to explore all available templates visually, making it easy to identify the design that aligns with your brand.
      Once selected, the template can be customized and launched quickly, ensuring a professional digital presence that supports growth and credibility.
    </p>
  <span className="relative z-10 text-lg tracking-widest animate-bounce-smooth mt-20 text-gray-300">
      ↓ Scroll Down ↓
    </span>



















<style jsx>{`
  @keyframes bounce-smooth {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  .animate-bounce-smooth {
    animation: bounce-smooth 2s ease-in-out infinite;
  }
`}</style>
  </div>
</div>



 <div className="m-0 p-0">
      <InfiniteMenu   items={items}/>
</div> 


<div className="-mt-12  w-full h-[800px] bg-black">
 <div className="max-w-[1400px] mx-auto my-12 p-8 pt-30 text-white">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 space">
        👨‍🚀 HOPE YOU LOVE OUR WORK !!!
      </h1>

      <p className="text-3xl leading-relaxed mt-10 daw">
        Congratulations, Founder! 🚀
      </p>
      <p className="text-3xl leading-relaxed space-y-4 daw">
        We hope you love your new website because every template you see here is
        the result of our hard work, creativity, and countless hours of coding
        and design. At <strong>STUDIO NEXA</strong>, we believe in turning
        startup dreams into reality, and this is just the beginning. Every
        feature, layout, and interaction has been crafted to give your brand a
        professional, engaging, and impactful digital presence.
      </p>
      <p className="text-3xl leading-relaxed space-y-4 daw">
        Your excitement is our fuel — seeing your startup shine online makes
        every late night, every brainstorming session, and every line of code
        worth it. We’re committed to continually improving, innovating, and
        delivering tools that make your journey easier and more successful. So
        go ahead, explore, customize, and launch — and remember, this is just
        the first step toward creating something extraordinary.
      </p>
    </div>
  
</div>



<Btn />






<HoverImageLinks />
    </div>
  )
}

export default Projects