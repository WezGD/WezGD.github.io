import { ItemModel } from "../models/item-model";
import figures from "./figures";
import sets from "./sets";

const data: ItemModel[] = [
    ...sets,
    ...figures,
];

export default data;