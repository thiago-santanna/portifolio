import goproject from "./../../public/goproject.svg";
import styles from "./../../styles/projetoitem.module.css";

export function ProjetoItem({ titulo, descricao }) {
  return (
    <div className={styles.projetoitem}>
      <div className={styles.title}>
        <h2>{titulo}</h2>
        <img src={goproject} alt="imagem de seta para ir pro projeto" />
      </div>
      <p>{descricao}</p>
    </div>
  );
}
