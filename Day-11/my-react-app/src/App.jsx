import React from 'react';
import HoverVideo from './HoverVideo';
import previewImg from './assets/image.jpg'; // 👈 your local image file
import Hg from './assets/video.mp4'; // 👈 your local video file
function App() {
  return (
    <div className="p-10">
      <HoverVideo
        imageSrc={previewImg}
        videoSrc={Hg} // You can also import a local video if needed
      />
    </div>
  );
}

export default App;
