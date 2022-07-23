import { Projeto } from "./components/projeto";
import "./global.css";
import styles from "./styles/App.module.css";

export function App() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.informacao}>
          <h1>Thiago Sant'Anna da Silva</h1>
          <h2>Portifólio</h2>
          <p>
            Aqui você vai encontrar diversos exemplos de projetos e prova de
            conceitos que podem ajudá-los na hora de começar algo.
          </p>
        </section>
        <section className={styles.projetos}>
          <h2>Últimos projetos</h2>
          <Projeto />
          <button>Ver mais</button>
        </section>
      </main>
    </>
  );
}
