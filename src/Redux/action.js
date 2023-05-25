import { Add_To_Cart,Empty_To_Cart,Remove_From_Cart} from "./constant";


export const addToCart = (data) => {

console.warn("action called",data); 
return {
       type:Add_To_Cart,
       data
   }
}
export const removeFromCart = (data) => {

console.warn(" Remove action called",data); 
return {
       type:Remove_From_Cart,
       data
   }
}
export const emptyToCart = () => {

console.warn("action Empty cart called"); 
return {
       type:Empty_To_Cart,
       
   }
}