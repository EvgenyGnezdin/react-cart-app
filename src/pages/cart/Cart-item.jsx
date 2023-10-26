import { useContext } from "react"
import { ShopContext } from "../../context/Shop-context"
import PropTypes from 'prop-types'


export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.product;
    const {cartItem, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
    return (
        <div className="cartItem">
            <img src={productImage} alt="" />
            <div className="descr">
                <p><b>{productName}</b></p>
                <p>₽{price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input type="text" 
                            value={cartItem[id]} 
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}

CartItem.PropTypes = {
    product: PropTypes.object.isRequired

}