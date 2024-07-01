import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import styles from "./styles.module.scss";

//em rotas dinamicas eu recebo o slug pelo parametro e é necessário tipagem
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { object }: PostProps = await getItemBySlug(slug);

  return (
    <div>
      <h1>Página {slug}</h1>
    </div>
  );
}
