import React from 'react'
import BG from '../assets/BG.jpg'
import MO from '../assets/MODEL.png'
import F1 from '../assets/f1.png'
import F2 from '../assets/f2.png'
import F3 from '../assets/f3.png'
import Q from '../assets/Q.jpg'
const Main = () => {
  return (
    <div className="h-500 bg-[#FDFEF0]">
    <div  className='pt-10'      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
      }} >







<div className="header flex">
  <div className="logo ml-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96" fill="none" crxemulator="" foxified=""><path d="M83.0135 14.1846C81.2858 12.4935 78.5834 12.2716 76.6447 13.716C76.6165 13.7371 76.5919 13.7548 76.5637 13.7759C72.8304 16.781 70.3251 22.5094 66.5003 32.2505C62.6966 41.9388 62.3623 49.6013 63.8472 60.8608C65.3321 72.1168 71.5602 79.3953 78.696 78.5956C86.511 77.7219 95.0298 67.6567 95.9869 47.7975C96.8349 30.1684 87.7355 18.8173 83.01 14.1846H83.0135ZM84.3576 43.1507C84.0902 51.2994 81.8699 57.8381 79.4033 57.7571C76.9332 57.676 75.1492 51.0035 75.4201 42.8583C75.6876 34.7096 77.9079 28.1709 80.3745 28.2519C82.8446 28.3329 84.6286 35.0055 84.3576 43.1507Z" fill="black"/><path d="M21.6514 72.7545C28.6008 46.945 29.1638 41.6182 33.6537 24.5528C36.2258 13.1558 42.4785 -1.04538 37.7318 0.0608406C35.7965 0.539969 29.5544 3.03073 25.6909 4.86622C23.5586 5.88084 22.1933 8.02283 22.1687 10.3868C22.1476 12.3702 22.2285 15.1463 22.5698 18.8103C23.3756 27.4522 21.6937 40.9136 18.6183 48.8544C16.7605 53.6457 15.3917 52.085 14.5859 44.0878C13.7801 36.0906 14.0335 24.9755 9.45568 22.6116C6.6724 21.1742 1.89051 31.7749 0.212094 35.763C-0.153849 36.6261 -0.0412493 37.6161 0.511184 38.3735C1.95033 40.3534 4.70193 44.8734 5.67661 51.5566C5.89125 53.0221 6.13404 54.4807 6.41905 55.9321C8.19247 65.0532 8.19599 70.2074 10.075 75.2981C12.0489 80.639 15.9934 84.4509 19.9871 77.0138C20.7119 75.6645 21.2573 74.2271 21.655 72.7474L21.6514 72.7545Z" fill="black"/><path d="M58.4604 40.5824C60.174 30.718 59.8573 22.2452 59.8432 20.4837C59.6251 19.0287 61.8594 17.5173 62.1585 21.7801C62.4541 26.0395 63.4464 27.7763 66.3634 27.4275C69.2839 27.0823 71.6414 17.3799 72.2536 15.3894C72.989 13.0008 75.424 6.55372 68.0981 4.48924C68.0981 4.48924 54.53 0.000935737 45.8037 0.458926C38.9141 0.219362 38.228 10.5664 37.5559 13.0008C36.9472 15.1992 35.4869 20.8465 37.109 23.3303C39.4665 26.2508 43.0239 23.2105 44.6073 21.2482C44.9803 20.7867 45.3322 20.4696 45.6489 20.2547C46.4511 19.7157 47.549 20.1419 47.7953 21.0791C48.4673 23.6086 49.7868 30.7356 48.0134 43.4466C45.7368 59.7687 44.2731 71.0987 43.9951 76.0908C43.7171 81.0829 46.5848 82.8937 50.297 83.0416C54.0093 83.1896 52.5877 89.8939 52.352 91.4123C52.0951 93.0857 53.4533 95.4074 56.7398 95.1713C60.1247 94.9282 61.2542 93.6071 60.832 91.2432C60.4097 88.8793 58.0065 83.3869 60.6209 81.7804C63.2352 80.1739 68.2564 78.3596 63.8264 70.2496C59.3964 62.1397 56.5005 51.2888 58.4639 40.5789L58.4604 40.5824Z" fill="black"/><path d="M43.3508 78.1588C44.1038 73.3675 42.9848 69.4147 42.2952 65.8388C41.1199 60.2549 41.9539 45.7225 44.0827 36.228C44.3747 34.9245 44.7618 33.6421 45.2016 32.3809C47.5099 25.7506 46.127 25.0918 43.6252 25.2714C41.2255 25.4441 35.395 25.6766 33.8468 27.5649C33.6005 27.8644 33.502 28.2554 33.5196 28.643C33.6251 31.0809 33.3753 44.4119 30.5006 54.9457C27.2458 66.8711 25.5568 71.7962 22.3794 78.659C19.2021 85.5218 18.8995 88.615 22.1085 89.5486C25.3175 90.4822 29.9868 87.3538 32.179 83.8977C34.3711 80.4417 35.0221 82.3511 34.1283 85.0779C33.2346 87.8012 32.5836 92.6806 37.1333 94.5513C41.6829 96.422 46.0426 92.2754 45.8666 88.2486C45.659 85.7156 42.8335 81.4422 43.3473 78.1658L43.3508 78.1588Z" fill="black"/><path d="M74.7947 87.8523C76.9912 87.4288 78.4288 85.3028 78.0058 83.1037C77.5829 80.9046 75.4595 79.4652 73.2631 79.8887C71.0667 80.3122 69.629 82.4382 70.052 84.6373C70.4749 86.8364 72.5983 88.2758 74.7947 87.8523Z" fill="black"/></svg>
  </div>
  <div className="menu font-extrabold stf ml-220 flex">
    <ul className='flex  gap-7'> 
      <li className='transition-transform duration-300  hover:translate-y-[-10px] cursor-pointer'>ABOUT</li>
      <li className='transition-transform duration-300  hover:translate-y-[-10px] cursor-pointer'>TEAM</li>
      <li className='transition-transform duration-300  hover:translate-y-[-10px] cursor-pointer'>COIN</li>
      <li className='transition-transform duration-300  hover:translate-y-[-10px] cursor-pointer'>FOLLOW US </li>

                    {/* Animated button  */}

      <div className="bg-black w-29 h-12 rounded-4xl mt-[-13px]">
        <div className="bg-white w-28 ml-[-px] h-11 rounded-4xl border-3 transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 idk flex justify-center items-center">TREAT</div>
      </div>



    </ul>
  </div>
</div>

<div className="font-['MyFont'] text-white ml-90 mt-7 ">
 <div className="text-9xl text-shadow-lg"> MEET VITO</div>
 <div className="text-4xl ml-130 text-shadow-lg">The little hippo</div>
</div>

                  {/* Dog image */}
        <div className="ml-155 transition-transform duration-300 hover:scale-130 mt-[-70px] " style={{
        backgroundImage: `url(${MO})`,
        backgroundSize: 'cover',
        height: '430px',
        width: '300px'
      }}></div>


                        {/* About section */}


            <div className="About font-['MyFont'] grid justify-center text-center mt-40 ">
            <div className="text-2xl text-border-blue">ABOUT</div>
            <div className="flex text-7xl justify-center mt-5">
              <h1>Once</h1> <h1 className='text-border ml-5'>abandoned</h1> <img className='w-20 ml-5' src={F1} /> <h1 className='ml-5'>in a cold</h1>
            </div>
           <div className="flex text-7xl justify-center mt-5">  
             <h1 className='text-border'>shelter</h1>  <img className='w-20 ml-5' src={F2} />  <h1 className='ml-5'> , Vito waited—lonely</h1>
            </div>
          <div className="flex text-7xl justify-center mt-5">
            <h1> but</h1>   <h1 className='text-border ml-5'> hopeful .</h1>   <img className='w-20 ml-5' src={F3 } />
            </div>
            </div>


                          {/* Story  */}
            <div className="Story flex">

            <div className="words">
              <div className="para text-3xl w-20">
                <div className="p1">Until one rainy day, Celine walked in and everything changed. She saw more than a trembling pup she saw family.</div>
                <div className="p2">Now Vito’s life is full of love, belly rubs, and endless tail wags. From shelter to superstar,
Vito proves: every underdog has a shot at glory.</div>
              </div>

                            {/* Animated button  */}
      <div className="bg-black w-29 h-12 rounded-4xl mt-[-13px]">
        <div className="bg-white w-28 ml-[-px] h-11 rounded-4xl border-3 transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 idk flex justify-center items-center">LEARN MORE</div>
      </div>
      </div>


            <div className="pic">

              <img className='rounded-2xl w-70'  src={Q} />
            </div>

            </div>





        
      </div></div>
  )
}

export default Main