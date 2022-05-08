import { MdShoppingCart } from "react-icons/md";
import styles from "./ShoppingCartButton.module.css";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Link from "next/link";

type Props = {};

const ShoppingCartButton = (props: Props) => {
  const numberOfItens = useSelector((state: RootState) =>
    state.carrinhoCompras.itens.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  return (
    <>
      <Link href="/carrinho">
        <div>
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
        </div>
      </Link>
    </>
  );
};

export default ShoppingCartButton;
