import styles from "./styles.module.scss";

//em rotas dinamicas eu recebo o slug pelo parametro e é necessário tipagem
export default function Page({ params: { slug }}: {
    params: { slug: string }
}) {
  return (
    <div>
      <h1>Página {slug}</h1>
    </div>
  );
}
