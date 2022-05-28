import Option from "../Option/Option";
import styles from "./Question.module.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

function Question() {
  return (
    <div className={styles.wrapper}>
      <h2>Qual é a agência que transforma ideias em soluções digitais?</h2>
      <div className={styles.optionsContainer}>
        <Option />
        <Option />
        <Option />
        <Option />
      </div>
      <div className={styles.menu}>
        <Link to="/">
          <AiFillHome />
        </Link>

        <div>
          <Link to="/video">
            <BiLeftArrow />
          </Link>
          <Link to="/answer">
            <BiRightArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question;
