import styles from "./CategoriasSection.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const CategoriasSection = (props: Props) => {
  //show the categories in cards
  const categories = [
    {
      id: 1,
      name: "Eletrônicos",
      tag: "electronics",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jóias",
      tag: "jewelery",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Roupas Masculinas",
      tag: "men's clothing",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Roupas Femininas",
      tag: "women's clothing",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <h1>Categorias</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <Link href={`/busca`}>
            <div className={styles.card}>
              <Image
                src={"https://via.placeholder.com/150"}
                alt={`Foto de todos os produtos`}
                width="150"
                height="150"
              />
              <div className="card-body">
                <h5 className={styles.cardTitle}>Todos os produtos</h5>
              </div>
            </div>
          </Link>
          {categories.map(({ id, name, tag, image }) => (
            <Link href={`/categoria/${tag}`} key={id}>
              <div className={styles.card}>
                <Image
                  src={image}
                  alt={`Foto de ${name}`}
                  width="150"
                  height="150"
                />
                <div className="card-body">
                  <h5 className={styles.cardTitle}>{name}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriasSection;
