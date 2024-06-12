import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <section className={styles.containerAbout}>
      <article className={styles.innerAbout}>
        <h1 className={styles.title}>
          <p>{object.metadata.about.description}</p>
        </h1>
      </article>

      <div className={styles.bannerAbout}>
        <Image className={styles.imageAbout} 
        alt="Imagem sobre a empresa"
        quality={100}
        fill={true}
        src={object.metadata.about.banner.url}
        />
      </div>
    </section>
  );
}
