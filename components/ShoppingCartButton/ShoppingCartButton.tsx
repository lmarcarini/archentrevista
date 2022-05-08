import { MdShoppingCart } from "react-icons/md";
import styles from "./ShoppingCartButton.module.css";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Link from "next/link";

type Props = {};

const ShoppingCartButton = (props: Props) => {
  const numberOfItens = useSelector(
    (state: RootState) => state.carrinhoCompras.itens.length
  );

  return (
    <>
      <Link href="/carrinho">
        <>
          <button
            type="button"
            title="Carrinho de Compras"
            className={styles.iconButton}
          >
            <MdShoppingCart>Carrinho de Compras</MdShoppingCart>
            {numberOfItens > 0 && (
              <span className={styles.numberOfItens}>{numberOfItens}</span>
            )}
          </button>
        </>
      </Link>
    </>
  );
};

export default ShoppingCartButton;
