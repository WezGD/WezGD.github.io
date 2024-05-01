import { ListItemModel, ListModel, ListType } from "../models/list-model";
import data from "./data";

const collectionItems: ListItemModel[] = data.map((e) => {
  return {
    item: e,
    quantity: 1
  };
})

const collection: ListModel = {
  id: 'wwh.3002@gmail.com',
  name: 'Wesley Hill',
  type: ListType.COLLECTION,
  items: collectionItems,
  priceNewForSale: 599.99,
  priceNewSold: 499.99,
  priceUsedForSale: 299,
  priceUsedSold: 100
}

export default collection;
