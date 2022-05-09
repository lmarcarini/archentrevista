import { useSelector } from "react-redux";
import ShoppingCartTable from "../components/ShoppingCartTable";
import { RootState } from "../store/store";
import styles from "../styles/Carrinho.module.css";

type Props = {};

const Carrinho = (props: Props) => {
  const hasItens = useSelector(
    (state: RootState) =>
      state.carrinhoCompras.itens.reduce(
        (total, item) => total + item.quantity,
        0
      ) > 0
  );
  return (
    <>
      <div className={styles.main}>
        <h1>Carrinho</h1>
        {hasItens && <ShoppingCartTable />}
        {!hasItens && <p>Não há nenhum produto adicionado ao seu carrinho.</p>}
      </div>
    </>
  );
};

export default Carrinho;
