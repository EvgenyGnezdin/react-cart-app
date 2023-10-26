import { useContext } from 'react';
import {ShopContext} from '../../context/Shop-context'



export const Product = (props) => {
    const {id, productName, price, productImage } = props.product;
    const {addToCart, cartItem} = useContext(ShopContext)
    const cartItemAmount = cartItem[id]


    
    return (
        <div className="product">
            <img src={productImage} alt="productImage" />
            <div className="descr">
                <p><b>{productName}</b></p>
                <p>₽{price}</p>
            </div>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
        
    )
}