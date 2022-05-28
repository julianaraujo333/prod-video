import Option from "../Option/Option";
import styles from "./Answer.module.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

function Answer() {
  return (
    <div className={styles.wrapper}>
      <h2>Qual é a agência que transforma ideias em soluções digitais?</h2>
      <span>Resposta Correta</span>
      <div className={styles.optionsContainer}>
        <Option />
      </div>
      <div className={styles.menu}>
        <Link to="/">
          <AiFillHome />
        </Link>

        <div>
          <Link to="/question">
            <BiLeftArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Answer;
