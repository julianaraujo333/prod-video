import styles from "./Video.module.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
function Menu({ next }) {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <AiFillHome />
      </Link>

      <div>
        <Link to="/">
          <BiLeftArrow />
        </Link>
        <Link to="/question">
          <BiRightArrow />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
