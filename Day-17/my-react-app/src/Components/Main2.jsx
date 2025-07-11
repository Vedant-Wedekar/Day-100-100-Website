import React from 'react'

const Main2 = () => {
  return (
    <div class="flex flex-col items-center justify-center max-w-5xl w-full mx-2 rounded-2xl shadow-md bg-gradient-to-b from-[#5524B7] to-[#0B1860] px-4 py-20 text-center">
    <div class="flex items-center -space-x-3">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
            class="h-16 w-16 md:w-20 md:h-20 rounded-full border-4 border-white"/>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
            class="h-16 w-16 md:w-20 md:h-20 rounded-full border-4 border-white"/>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
            alt="image"
            class="h-16 w-16 md:w-20 md:h-20 rounded-full border-4 border-white"/>
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="image"
            class="h-16 w-16 md:w-20 md:h-20 rounded-full border-4 border-white"/>
    </div>
    <h1 class="text-3xl md:text-4xl font-bold text-white mt-6">
        Refine your writing through AI
    </h1>
    <p class="text-white mt-4 max-w-md">
        Over 3 million professionals and teams trust AI to supercharge their content creation.
    </p>
    <button class="bg-gradient-to-r from-[#6B41FF] to-[#F75BE9] font-medium text-white rounded-lg px-20 py-3 mt-10">
        LEARN MORE
    </button>
</div>
  )
}

export default Main2