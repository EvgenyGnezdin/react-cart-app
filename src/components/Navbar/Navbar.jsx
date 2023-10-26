import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.scss'
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/" className='shop'>Shop</Link>
                <Link to="/cart">
                    <ShoppingCart className='shoppingcart' size={32}/>
                </Link>
            </div>
        </div>
    )
}