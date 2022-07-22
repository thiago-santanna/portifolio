import logo from "../../public/logo.svg";
import styles from "../../styles/HeaderNavBar.module.css";

export function HeaderNavBar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={logo} alt="Logo Marga TSS Web Apps" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Projetos</li>
            <li>Blog</li>
          </ul>
        </nav>
        <button>Deixe seu recado</button>
      </div>
    </>
  );
}
