import styles from "./Introduction.module.css";
import logo from "./../../Assets/logoPreto.png";
import { Link } from "react-router-dom";
function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textGroup}>
        <h2>Video Interativo</h2>
        <span>Apresentação Layout</span>
      </div>

      <img src={logo} alt="Prod" />
      <Link to="/question">Iniciar</Link>
    </div>
  );
}

export default Introduction;
