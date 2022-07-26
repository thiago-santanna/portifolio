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
          <ProjetoItem
            titulo="Dashboard de vendas"
            descricao="Um site que mostra vendas em graficos React e Java."
            url="https://tssvendas.netlify.app/dashboard"
          />

          <ProjetoItem
            titulo="Curriculo"
            descricao="Curriculo demostrando os cursos fiz e atalhos pra o Github."
            url="https://curriculo-dev.tsswebapps.com/"
          />

          <ProjetoItem
            titulo="Gerar apostas Megasena"
            descricao="Site feito usando Reac no front e Java no Back"
            url="https://fervent-poincare-b8cec1.netlify.app/"
          />

          <ProjetoItem
            titulo="Site para divulgar viagens e turismo"
            descricao="Um site feito em Reac usando framework CSS."
            url="https://travels-tsswebapp.vercel.app/"
          />
          <button>Ver mais</button>
        </section>
      </main>
    </>
  );
}
