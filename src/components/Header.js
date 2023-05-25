import { useSelector } from 'react-redux';
import { cart } from '../assest';

// import {cartimg} from '../assest/cart.png';

const Header = () =>{
    const result =useSelector((state)=>state.cartData);
    // console.warn("redux data in header",result)
    return (
       <div className="header">
        <div className="cart-div"> 
              <span>{result.length}</span>
              <img src={cart} alt='cart' />
        </div>
       </div>
    )
}
export default Header;