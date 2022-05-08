import Image from "next/image";
import Link from "next/link";
import { toRealString } from "../../utils/formatting";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  //returns a card for the product in a search result
  return (
    <div className={styles.card}>
      <Link href={`/produto/${product.id}`}>
        <div className={styles.cardBody}>
          <Image src={product.image} width={150} height={150} />
          <h5 className={styles.cardTitle}>{product.name}</h5>
          <p className={styles.cardText}>{product.description}</p>
          <p className={styles.cardText}>
            <small className={styles.testMuted}>
              {toRealString(product.price)}
            </small>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
