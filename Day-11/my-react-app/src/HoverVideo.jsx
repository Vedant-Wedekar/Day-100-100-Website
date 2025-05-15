import React, { useRef, useState } from 'react';

const HoverVideo = ({ imageSrc, videoSrc }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative w-[300px] h-[200px] overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt="Preview"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default HoverVideo;
