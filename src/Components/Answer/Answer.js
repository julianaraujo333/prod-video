import Option from "../Option/Option";
import styles from "./Answer.module.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiLeftArrow } from "react-icons/bi";
const data = [
  {
    id: 1,
    title: "Todas as alternativas",
    letter: "d",
  },
];
function Answer() {
  return (
    <div className={styles.wrapper}>
      <h2>Qual é a agência que transforma ideias em soluções digitais?</h2>
      <span>Resposta Correta</span>
      <div className={styles.optionsContainer}>
        {data.map((data) => (
          <Option key={data.id} title={data.title} letter={data.letter} />
        ))}
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
