const BackgroundVideo = () => {
  return (
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
  );
};

export default BackgroundVideo;
