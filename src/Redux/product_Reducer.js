import { PRODUCT_LIST } from "./constant";
import { Productlist } from "./product_action";

export const ProductData = (data = [Productlist], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn("PRODUCT_LIST CONDITION", action);
            return [action.Productlist.data];
            
        default:
            return Productlist.data;
    }
}