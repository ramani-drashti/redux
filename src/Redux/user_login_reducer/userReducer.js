import { user_action } from '../Alert_Action/user_action'
import {users,user_logout} from '../constant'

// let un= localStorage.getItem("email");
// let up= localStorage.getItem("password");

const initialvalues ={
    isLogin : false
}

export const userData=(state=initialvalues,user_action)=>{
    // console.warn(user_action);
    switch(user_action.type){
        case users:
            return{...state, isLogin:user_action.data};
        // case users:
        //     console.warn("login condition",user_action);
        //     const validationpassword = (password) => {
        //         // console.warn(String(password).length);
        //         if (String(password).length < 4) {
        //             alert({password: '*password must be 8 character'});
        //         } else if (String(password).length >= 10) {
        //             alert({password: '*please enter only 10 character' });
        //         }
        //         else {
        //             alert({password: null })
        
        //         }
        
        //     }
        // case user_logout:    
        //    return{
        //     email:null,
        //     password:null
        //    }
        default:
            return state;    
    }
}
