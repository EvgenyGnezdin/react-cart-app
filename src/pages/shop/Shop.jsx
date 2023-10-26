import { PRODUCTS } from '../../product';
import { Product } from './Product';
import './Shop.scss'

export const Shop = () => {
    return (
        <div className="shoper">
            <div className="shopTitle">
                <h1>My Test Shop</h1>
            </div>
            <div className="products"> 
                {PRODUCTS.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}