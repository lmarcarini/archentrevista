import ShoppingCartTable from "../components/ShoppingCartTable";

type Props = {};

const Carrinho = (props: Props) => {
  return (
    <>
      <h1>Carrinho</h1>
      <div>
        <ShoppingCartTable />
      </div>
    </>
  );
};

export default Carrinho;
