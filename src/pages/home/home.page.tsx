import styles from "./home.module.css";
import { Header } from "../../components/Header.component";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
    </div>
  );
};
