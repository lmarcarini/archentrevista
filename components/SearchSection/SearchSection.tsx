import ProductCard from "../ProductCard";
import styles from "./SearchSection.module.css";

type Props = {};

const SearchSection = (props: Props) => {
  // display a list of products
  const products = [
    {
      id: "1",
      name: "Produto 1",
      description: "Descrição do produto 1",
      price: 1,
      image: "https://via.placeholder.com/150",
      category: "camisetas",
      stock: 10,
      tags: [],
      images: ["https://via.placeholder.com/150"],
      videos: [],
      options: {},
    },
    {
      id: "2",
      name: "Produto 2",
      description: "Descrição do produto 2",
      price: 2,
      image: "https://via.placeholder.com/150",
      category: "camisetas",
      stock: 10,
      tags: [],
      images: ["https://via.placeholder.com/150"],
      videos: [],
      options: {},
    },
    {
      id: "3",
      name: "Produto 3",
      description: "Descrição do produto 3",
      price: 3,
      image: "https://via.placeholder.com/150",
      category: "camisetas",
      stock: 10,
      tags: [],
      images: ["https://via.placeholder.com/150"],
      videos: [],
      options: {},
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {products.map((product) => (
          <div className={styles.colItem} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
