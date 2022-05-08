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
  itens: [],
  total: 0,
};

export const carrinhoComprasSlice = createSlice({
  name: "carrinhoCompras",
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<ItemCarrinho>) => {
      //if item already exists, increase quantity
      const item = state.itens.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.itens.push(action.payload);
      }
      state.total += action.payload.price;
    },
  },
});

export const { adicionarItem } = carrinhoComprasSlice.actions;

export default carrinhoComprasSlice.reducer;
