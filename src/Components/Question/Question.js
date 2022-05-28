import Option from "../Option/Option";
import styles from "./Question.module.css";
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
    </div>
  );
}

export default Question;
