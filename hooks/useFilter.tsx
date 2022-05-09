import { useCallback } from "react";

type Props = {
  data: Product[];
  filter: string | string[];
};

export const useFilter = ({ data, filter }: Props) => {
  //filter data by filter
  const filteredData = useCallback(
    (data: Product[], filter: string | string[]) =>
      data.filter((product) => {
        //if filter is array, check all filters
        if (Array.isArray(filter)) {
          return filter.every((f) => product.name.includes(f));
        }
        //if filter is string, check if product has filter
        else {
          return product.name
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase());
        }
      }),
    [data, filter]
  );

  const products = filteredData(data, filter);

  return { products };
};
