import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
      {/* Card 1 */}
      <div className="lg:w-1/2 group relative rounded-[60px] overflow-hidden h-full border border-black/20 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Image */}
        <img
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          src={props.image1}
          alt={props.title1}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-90"></div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 text-white font-[font2] text-3xl lg:text-4xl drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
          {props.title1}
        </div>

        {/* Hover overlay button */}
        <a
          href={props.link1}          // redirect link
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500"
        >
          <h2 className="uppercase text-3xl lg:text-5xl font-[font1] border-2 lg:border-4 px-6 lg:px-10 py-2 lg:py-4 text-white rounded-full tracking-wide shadow-md">
            View Project
          </h2>
        </a>
      </div>

      {/* Card 2 */}
      <div className="lg:w-1/2 group relative rounded-[60px] overflow-hidden h-full border border-black/20 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Image */}
        <img
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          src={props.image2}
          alt={props.title2}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-90"></div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 text-white font-[font2] text-3xl lg:text-4xl drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
          {props.title2}
        </div>

        {/* Hover overlay button */}
        <a
          href={props.link2}          // redirect link
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500"
        >
          <h2 className="uppercase text-3xl lg:text-5xl font-[font1] border-2 lg:border-4 px-6 lg:px-10 py-2 lg:py-4 text-white rounded-full tracking-wide shadow-md">
            View Project
          </h2>
        </a>
      </div>
    </>
  )
}

export default ProjectCard
