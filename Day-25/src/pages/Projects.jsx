import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import InfiniteMenu  from '../components/elements/InfiniteMenu'

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
  { image: W4, link: 'https://google.com/', title: 'Item 4', description: 'This is pretty cool, right?' },
  { image: W5, link: 'https://google.com/', title: 'Item 5', description: 'This is pretty cool, right?' },
  { image: W6, link: 'https://google.com/', title: 'Item 6', description: 'This is pretty cool, right?' },
  { image: W7, link: 'https://google.com/', title: 'Item 7', description: 'This is pretty cool, right?' },
  { image: W8, link: 'https://google.com/', title: 'Item 8', description: 'This is pretty cool, right?' },
  { image: W9, link: 'https://google.com/', title: 'Item 9', description: 'This is pretty cool, right?' },
  { image: W10, link: 'https://google.com/', title: 'Item 10', description: 'This is pretty cool, right?' },
  { image: W11, link: 'https://google.com/', title: 'Item 11', description: 'This is pretty cool, right?' },
  { image: W12, link: 'https://google.com/', title: 'Item 12', description: 'This is pretty cool, right?' },
  { image: W13, link: 'https://google.com/', title: 'Item 13', description: 'This is pretty cool, right?' },
  { image: W14, link: 'https://google.com/', title: 'Item 14', description: 'This is pretty cool, right?' , dp:'https://static.wikia.nocookie.net/the-lady-of-eldia/images/4/43/Eren_Jaeger_%28850%29.png/revision/latest?cb=20201217121151'},
  { image: W15, link: 'https://google.com/', title: 'Item 15', description: 'This is pretty cool, right?' },
];
const Projects = () => {
  const projects = [{
    image1: W2,
    image2: W4
  }, {
    image1: W1,
    image2: W3
  }, {
    image1:W5,
    image2: W6
  }]
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
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[550px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
      </div>
<div className="m-0 p-0">
      <InfiniteMenu   items={items}/>
</div>


<HoverImageLinks />
    </div>
  )
}

export default Projects