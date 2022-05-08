import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ItemCarrinho {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CarrinhoCompraState {
  itens: ItemCarrinho[];
  total: number;
}

const initialState: CarrinhoCompraState = {
  itens: [{ id: "0", name: "", price: 0, quantity: 0, image: "" }],
  total: 0,
};

export const carrinhoComprasSlice = createSlice({
  name: "carrinhoCompras",
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<ItemCarrinho>) => {
      state.itens = [...state.itens, action.payload];
      state.total += action.payload.price;
    },
  },
});

export const { adicionarItem } = carrinhoComprasSlice.actions;

export default carrinhoComprasSlice.reducer;
