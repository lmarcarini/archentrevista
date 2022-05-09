import { toRealString } from "../../utils/formatting";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import QuantityButton from "../QuantityButton";
import { adicionarItem } from "../../store/carrinhoComprasSlice";
import { removerItem } from "../../store/carrinhoComprasSlice";
import styles from "./ShoppingCartTable.module.css";

type Props = {};

const ShoppingCartTable = (props: Props) => {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootState) => state.carrinhoCompras.itens);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id} className={styles.tableRow}>
              <td>{item.name}</td>
              <td>{toRealString(item.price)}</td>
              <td>
                <QuantityButton
                  quantity={item.quantity}
                  onIncrease={() =>
                    dispatch(adicionarItem({ ...item, quantity: 1 }))
                  }
                  onDecrease={() => dispatch(removerItem(item.id))}
                />
              </td>
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
  );
};

export default ShoppingCartTable;
