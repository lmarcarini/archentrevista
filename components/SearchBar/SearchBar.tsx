import styles from "./SearchBar.module.css";

type Props = {};

const SearchBar: React.FC = ({}: Props) => {
  return (
    <div role="search" className={styles.searchContainer}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Encontre o que você procura"
      />
    </div>
  );
};

export default SearchBar;
