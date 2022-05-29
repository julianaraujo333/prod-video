import Option from "../Option/Option";
import styles from "./Question.module.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

const data = [
  {
    id: 1,
    title: "Prod",
    letter: "a",
  },
  {
    id: 2,
    title: "Prod.ag",
    letter: "b",
  },
  {
    id: 3,
    title: "Agencia Prod",
    letter: "c",
  },
  {
    id: 4,
    title: "Todas as alternativas",
    letter: "d",
  },
];

function Question() {
  return (
    <div className={styles.wrapper}>
      <h2>Qual é a agência que transforma ideias em soluções digitais?</h2>
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
