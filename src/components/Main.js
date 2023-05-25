
import { addToCart, emptyToCart, removeFromCart } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../Redux/product_action';
import { Button, Card, Col,  Row } from 'react-bootstrap';
import { Iphone } from '../assest';
import React from 'react';
import Productlist from '../DB.json'


function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.cartData);
    // console.warn("data in main component", data)
    const Productlist={
        id:"",
        name:"",
        price:"",
        color:"",
        category:"",
        brand:"",
        photo:""
    }
    // const product = {
    //     name: 'I phone',
    //     type: 'mobile',
    //     price: 10000,
    //     color: 'red'
    // }

    return (
        <div>

            <div className="App">
                <button onClick={() => dispatch(addToCart(Productlist))}>Add To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(emptyToCart())}>Empty To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(ProductList(Productlist))}>call Product list</button>
            </div>
            <div>
                <Row>
                {data && data.map((item, index) => {
                    return (
                        <Col 
                        lg={3}
                        className='mt-4'
                        >
                        <Card style={{
                            
                            maxWidth: '100%',
                            marginLeft: '10px',
                            marginRight: '10px',
                           
                        }}
                        >
                            <Card.Img src={Productlist.photo} className='img-fluid' 
                            style={{ width: '80px', height: '80px',marginLeft:'100px'}}
                             alt='...' />
                            <Card.Body>
                                <Card.Title>{Productlist.name}</Card.Title>
                                    <div>
                                        <Button onClick={() => dispatch(removeFromCart(Productlist))}>Remove From Cart</Button>
                                    </div>
                                
                            </Card.Body>
                        </Card>
                     </Col>
                    );
                })}
                </Row>
            </div>
        </div>
    );
}

export default Main;