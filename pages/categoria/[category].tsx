import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchSection from "../../components/SearchSection";

type Props = {};

const Category: NextPage = ({}: Props) => {
  const router = useRouter();
  const [category, setCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!router.isReady) return;
    const { category } = router.query;
    if (Array.isArray(category)) setCategory(category[0]);
    else {
      setCategory(category);
    }
  }, [router]);

  return (
    <div>
      <h1>{category}</h1>
      {category && <SearchSection category={category} />}
    </div>
  );
};

export default Category;
