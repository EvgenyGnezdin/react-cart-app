import { ShopContext } from "../../context/Shop-context"
import { useContext } from "react"
import { PRODUCTS } from "../../product"
import { CartItem } from "./Cart-item"
import './cart.scss'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

    const {cartItem, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate()

    return (
        <div className="cart">
            <div>
                <h1>Yourt Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map(product => {
                    if (cartItem[product.id] !== 0 ){
                        return <CartItem key={product.id} product={product}/>
                    }
                })}
            </div>
            {totalAmount > 0 ? 
                <div className="checkout">
                    
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                    <button>Chekout</button>
                </div>
           : 
                <h1>Your Cart is Empty</h1> }
        </div>
    )
}