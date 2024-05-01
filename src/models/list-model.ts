import { ItemModel } from "./item-model";

export enum ListType {
  COLLECTION,
  WISHLIST
}

export interface ListItemModel {
  item: ItemModel,
  quantity: number
}

export interface ListModel {
  id: string; // EMAIL
  name: string; // User's Name or wishlist name
  type: ListType; // Collection or Wishlist
  items: ListItemModel[];
  priceNewForSale: number;
  priceNewSold: number;
  priceUsedForSale: number;
  priceUsedSold: number;
}
