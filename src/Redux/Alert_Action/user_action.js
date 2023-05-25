import {users,user_logout } from "../constant";
// import { alertaAction } from "./Alert_Action";
// import { userlist } from '../user_login_reducer/userReducer';

export const log_in=(data)=>{
   //  console.warn("log in",data);
 return{
    type:users,
   //  email:data.email
    data
 }   
}
// export const logout = (data) =>{
//    return {
//      type :user_logout,
//      data
//    }
//  }
