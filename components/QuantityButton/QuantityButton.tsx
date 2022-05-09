import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import styles from "./QuantityButton.module.css";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityButton = ({ quantity, onIncrease, onDecrease }: Props) => {
  return (
    <div className="quantityButtonContainer">
      <button
        type="button"
        className={styles.quantityButton}
        title="Remove Item"
        onClick={onDecrease}
      >
        <MdRemoveCircleOutline />
      </button>
      {" " + quantity + " "}
      <button
        type="button"
        className={styles.quantityButton}
        title="Adiciona Item"
        onClick={onIncrease}
      >
        <MdAddCircleOutline />
      </button>
    </div>
  );
};

export default QuantityButton;
