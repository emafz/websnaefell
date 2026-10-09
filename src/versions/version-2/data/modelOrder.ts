import { products } from "./products";
import type { Product } from "../types/Product";

const modelOrder = ["bestride-f1", "bestride-pro-f2", "light-p2", "antelope-p5", "mantis-p6"];

export const modelDisplayProducts = modelOrder
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is Product => Boolean(product));
