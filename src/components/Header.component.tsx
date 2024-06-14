import logo from "../images/logo.png";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.navContainer}>
      <img src={logo} alt="" />
      <p>Libros</p>
      <input type="text" placeholder="Buscar por libro o autor" />
    </div>
  );
};
