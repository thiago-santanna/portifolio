import { ProjetoItem } from "./components/projeto";
import "./global.css";
import styles from "./styles/App.module.css";

export function App() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.informacao}>
          <h1 className={styles.title}>Thiago Sant'Anna da Silva</h1>
          <h2 className={styles.subtitle}>Portifólio</h2>
          <p className={styles.title}>
            Aqui você vai encontrar diversos exemplos de projetos e prova de
            conceitos que podem ajudá-los na hora de começar algo.
          </p>
        </section>
        <section className={styles.projetos}>
          <h2 className={styles.title}>Últimos projetos</h2>
          <ProjetoItem />
          <ProjetoItem />
          <ProjetoItem />
          <ProjetoItem />
          <button>Ver mais</button>
        </section>
      </main>
    </>
  );
}
