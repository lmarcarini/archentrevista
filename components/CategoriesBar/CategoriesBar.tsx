import Link from "next/link";
import styles from "./CategoriesBar.module.css";

type Props = {};

const CategoriesBar = (props: Props) => {
  // Show the categories in a narrow navbar
  const categories = [
    {
      id: 1,
      name: "Eletrônicos",
      tag: "electronics",
    },
    {
      id: 2,
      name: "Jóias",
      tag: "jewelery",
    },
    {
      id: 3,
      name: "Roupas Masculinas",
      tag: "men's clothing",
    },
    {
      id: 4,
      name: "Roupas Femininas",
      tag: "women's clothing",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Link href={`/busca`}>
          <a className={styles.navItem}>Todos os Produtos</a>
        </Link>
        {categories.map(({ id, name, tag }) => (
          <Link href={`/categoria/${tag}`} key={id}>
            <a className={styles.navItem}>{name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBar;
