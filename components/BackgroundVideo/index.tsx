"use client";
import React, { useState, useEffect } from "react";

const BackgroundVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/common/welcome_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default BackgroundVideo;
