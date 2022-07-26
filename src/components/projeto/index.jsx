import goproject from "./../../public/goproject.svg";
import styles from "./../../styles/projetoitem.module.css";

export function ProjetoItem({ titulo, descricao, url }) {
  return (
    <div className={styles.projetoitem}>
      <div className={styles.title}>
        <h2>{titulo}</h2>
        <a href={url} target="_blank">
          <img src={goproject} alt="imagem de seta para ir pro projeto" />
        </a>
      </div>
      <p>{descricao}</p>
    </div>
  );
}
