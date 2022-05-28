import styles from "./Introduction.module.css";
import logo from "./../../Assets/logoPreto.png";
function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textGroup}>
        <h2>Video Interativo</h2>
        <span>Apresentação Layout</span>
      </div>

      <img src={logo} alt="Prod" />
      <button>Iniciar</button>
    </div>
  );
}

export default Introduction;
