import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

type Props = {};

const SearchBar: React.FC = ({}: Props) => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = router.query.category;
    const fixedPathname = category ? `/categoria/${category}` : router.pathname;
    router.push(
      {
        pathname: fixedPathname,
        query: { filtro: e.target.value },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div role="search" className={styles.searchContainer}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Encontre o que você procura"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
