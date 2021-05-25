import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{ basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout__left">
                <img 
                    className="checkout__add" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/Jupiter/Phase3/CatPage/MobileHolder/V268967897_Jupiter2020_Phase3_WLA_Handpicked_Acc_1500x300_desk_store_header.jpg" 
                    alt="" 
                />

               {console.log(user?.email)}

                <h3>Hello, {user?.email}</h3>

                {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is empty</h2>
                        <p>
                        You have no items in your basket. To buy one or more item click "Add to basket" next to the item.
                        </p>
                    </div>
                    ):(
                    
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>

                            {/* List of all the products in cart */}

                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))}
                        
                        </div>
                    
                    )}
                            
            </div>
                    
            {
                basket?.length > 0 && (
                    
                    <div className="checkout__right">
                        
                        
                        <Subtotal />

                    </div>
                )
                
            }
        </div>
        
        
    )
}

export default Checkout;
