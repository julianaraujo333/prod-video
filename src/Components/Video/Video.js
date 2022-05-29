import { useRef } from "react";
import styles from "./Video.module.css";
import useFullscreenStatus from "../../hooks/useFullScreen";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import video from "./../../Assets/video.mp4";
function Menu() {
  const videoElem = useRef(null);

  let isFullScreen, setIsFullScreen;
  let errorMsg;

  try {
    [isFullScreen, setIsFullScreen] = useFullscreenStatus(videoElem);
  } catch (e) {
    errorMsg = "Fullscreen not supported";
    isFullScreen = false;
    setIsFullScreen = undefined;
  }

  const handleExitFullScreen = () => document.exitFullscreen();

  return (
    <div className={styles.wrapper}>
      <div className={styles.videoContent}>
        <video controls autoPlay={true}>
          <source src={video} type="video/mp4" ref={videoElem} />
        </video>
      </div>

      <div className={styles.menu}>
        <Link to="/">
          <AiFillHome />
        </Link>
        <button onClick={isFullScreen ? handleExitFullScreen : setIsFullScreen}>
          {isFullScreen ? "Minimizar tela" : "Assistir em tela cheia"}
        </button>

        <div>
          <Link to="/">
            <BiLeftArrow />
          </Link>
          <Link to="/question">
            <BiRightArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
