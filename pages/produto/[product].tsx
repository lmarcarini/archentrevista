import type { NextPage } from "next";
import { useRouter } from "next/router";
import { toRealString } from "../../utils/formatting";
import styles from "../../styles/ProductPage.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { adicionarItem } from "../../store/carrinhoComprasSlice";

type Props = {};

const ProductPage: NextPage = ({}: Props) => {
  const router = useRouter();
  const { productId } = router.query;
  const dispatch = useDispatch();

  //TODO: fetch product from API
  const product = {
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
  };

  return (
    <div className={styles.main}>
      <div className={styles.productSection}>
        <div className={styles.imageContainer}>
          <Image src={product.image} layout="fill" alt="Imagem do produto" />
        </div>
        <div className={styles.productDetails}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{toRealString(product.price)}</p>
          <button
            type="button"
            onClick={() => dispatch(adicionarItem({ ...product, quantity: 1 }))}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
