import { PRODUCT_LIST } from "./constant";
import Productlist from "../DB.json"

export const ProductList = (data) => {
// let data="hello,How r u?"
console.warn("action called",data); 
return {
       type:PRODUCT_LIST,
       data:Productlist
   }
}