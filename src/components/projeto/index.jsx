import goproject from "./../../public/goproject.svg";
import styles from "./../../styles/projetoitem.module.css";

export function ProjetoItem() {
  return (
    <div className={styles.projetoitem}>
      <div className={styles.title}>
        <h2>Download/Upload</h2>
        <img src={goproject} alt="imagem de seta para ir pro projeto" />
      </div>
      <p>Uma implementação em NodeJs pra enviar e baixar arquivos.</p>
    </div>
  );
}
