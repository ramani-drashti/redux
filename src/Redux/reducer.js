// import { addToCart } from './action'
import { Add_To_Cart, Empty_To_Cart, Remove_From_Cart } from './constant'

export const cartData = (data = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            // console.warn("ADD_TO_CART CONDITION", action);
            return [...data,action.data];
        case Remove_From_Cart:
            console.warn("Remove_TO_CART CONDITION", action);
            data.length = data.length ? data.length - 1 : []
            return [...data];
        case Empty_To_Cart:
            console.warn("Remove_TO_CART CONDITION", action);
            data = []
            return [...data];
        default:
            return data;
    }
}