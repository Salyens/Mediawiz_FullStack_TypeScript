import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.video_container}>
      <video
        className={styles.video_media}
        src="/preloader/preloader.mp4"
        autoPlay
        preload="auto"
        playsInline
        muted
        loop
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
        }}
      ></video>
    </div>
  );
};

export default Preloader;
