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
      const item = state.itens.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.itens.push(action.payload);
      }
      state.total += action.payload.price;
    },
    removerItem: (state, action: PayloadAction<string>) => {
      const item = state.itens.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.itens = state.itens.filter((i) => i.id !== action.payload);
        }
        state.total -= item.price;
      }
    },
  },
});

export const { adicionarItem, removerItem } = carrinhoComprasSlice.actions;

export default carrinhoComprasSlice.reducer;
