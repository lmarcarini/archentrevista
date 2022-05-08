import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toRealString } from "../utils/formatting";

type Props = {};

const Carrinho = (props: Props) => {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootState) => state.carrinhoCompras.itens);

  return (
    <>
      <h1>Carrinho</h1>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{toRealString(item.price)}</td>
                <td>{item.quantity}</td>
                <td>{toRealString(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="totalContainer">
          <div className="total">
            <span>Total:</span>
            <span>
              {toRealString(
                itens.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
