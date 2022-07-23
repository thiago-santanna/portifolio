import styles from "./../../styles/Footer.module.css";
import { Linkedin, GitHub, Instagram } from "react-feather";
import imgwhatsApp from "./../../public/whatsapp.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section>
          <span>&copy;2021 TSS Aplicativos Web</span>
        </section>
        <section className={styles.footerIcons}>
          <Linkedin size={24} />
          <GitHub size={24} />
          <Instagram size={24} />
          <img src={imgwhatsApp} />
        </section>
      </div>
    </footer>
  );
}
