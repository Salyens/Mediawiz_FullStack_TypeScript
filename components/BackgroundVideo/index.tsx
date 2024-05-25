"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const BackgroundVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="absolute inset-0 w-full h-screen -z-20">
        <Image
          src="/mainPage/bg_img.png"
          alt="Background image"
          fill
          sizes="100vh"
          className="object-cover"
          priority
        />
      </div>
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-screen object-cover -z-10"
        >
          <source src="/mainPage/welcome_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default BackgroundVideo;
