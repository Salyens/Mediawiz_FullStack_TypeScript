import classNames from "classnames";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.video_container}>
      <video
        className={classNames(
          "w-full sm:h-1/2 object-cover",
          styles.video_media
        )}
        src="/preloader/preloader.mp4"
        autoPlay
        preload="auto"
        playsInline
        muted
        loop
      />
    </div>
  );
};

export default Preloader;
