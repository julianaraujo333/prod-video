import styles from "./Option.module.css";
function Option({ letter, title }) {
  return (
    <div className={styles.optionBox}>
      <span>{letter}</span>
      <p>{title}</p>
    </div>
  );
}

export default Option;
