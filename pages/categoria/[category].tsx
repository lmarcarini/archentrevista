import type { NextPage } from "next";
import { useRouter } from "next/router";

type Props = {};

const Category: NextPage = ({}: Props) => {
  const router = useRouter();
  const { category } = router.query;

  return <div>{category}</div>;
};

export default Category;
