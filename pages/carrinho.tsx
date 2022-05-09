import { useSelector } from "react-redux";
import ShoppingCartTable from "../components/ShoppingCartTable";
import { RootState } from "../store/store";

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
      <div>
        <h1>Carrinho</h1>
        {hasItens && <ShoppingCartTable />}
        {!hasItens && <p>Não há nenhum produto adicionado ao seu carrinho.</p>}
      </div>
    </>
  );
};

export default Carrinho;
