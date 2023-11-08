import React, { useContext } from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import cart from "./assets/cart.svg";
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to='/cart'>
            <div className='CartContainer'>
               <img src={cart} alt="cart-widget" className="cartImg"/>
                <p className='CartNumber'>{ totalQuantity }</p> 
            </div>
            
        </Link>
    );
}

export default CartWidget;