import React from 'react'
import { useState,useEffect } from 'react';
const Header = () => {

    const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


   const [place, setPlace] = useState("Getting location...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        const data = await response.json();

        setPlace(
          `${data.address.city || data.address.town || data.address.village}, ${data.address.state}`
        );
      });
    }
  }, []);




  return (
    <div className=" text-xl text-white flex justify-between p-5  ">
    <div className="brandname">AOKA YOO</div>
    <div className="studio">Work,Process,Studio</div>
    <div className="loc">
        <div className="">{time}</div>
        <div className="">{place}</div>
    </div>
    <div className="contact"><a>Contact</a></div>
    </div>
  )
}
export default Header


