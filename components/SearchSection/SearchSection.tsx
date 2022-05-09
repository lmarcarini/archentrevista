import ProductCard from "../ProductCard";
import styles from "./SearchSection.module.css";
import { useProducts } from "../../hooks/useProducts";
import { useRouter } from "next/router";
import { useFilter } from "../../hooks/useFilter";

type Props = {
  category?: string;
};

const SearchSection = ({ category }: Props) => {
  // display a list of products

  const { isLoading, error, data, isFetching } = useProducts(category);

  // get filter from url
  const router = useRouter();
  const filter = router.query.filtro || "";

  const { products } = useFilter({ data: data || [], filter: filter });

  if (isLoading) return <div>"Carregando..."</div>;

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
