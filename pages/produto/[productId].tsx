import type { NextPage } from "next";
import { useRouter } from "next/router";
import { toRealString } from "../../utils/formatting";
import styles from "../../styles/ProductPage.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { adicionarItem } from "../../store/carrinhoComprasSlice";
import { useProduct } from "../../hooks/useProducts";

type Props = {};

const ProductPage: NextPage = ({}: Props) => {
  const router = useRouter();
  const { productId } = router.query;
  const dispatch = useDispatch();

  const { isLoading, error, data, isFetching } = useProduct(Number(productId));

  if (isLoading) return <div>Carregando...</div>;

  if (!data) return <div>Não encontrado</div>;

  return (
    <div className={styles.main}>
      <div className={styles.productSection}>
        <div className={styles.imageContainer}>
          <Image src={data.image} layout="fill" alt="Imagem do produto" />
        </div>
        <div className={styles.productDetails}>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <p>{toRealString(data.price)}</p>
          <button
            type="button"
            onClick={() => dispatch(adicionarItem({ ...data, quantity: 1 }))}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
