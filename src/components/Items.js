import React from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart } from '../actions'

function Items() {
    const items = useSelector(state => state.foodItems);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return <div className="container">
        {items.map((item)=> {
            const {id, name, price , image} = item;
            const existsInCart = cart.find((cartdata)=> cartdata.id === id)
            return <article key={id} className="items">
                <h4 className="title">{name}<span className="cart-logo">{existsInCart && <MdAddShoppingCart/>}</span></h4>
                <img className="item-img" src={image} alt={name}/>
                <span className="price">Rs.{price}/-</span>
                <button className="cartbtn" onClick={()=>dispatch(addToCart(id,name,price))}> Add to cart</button>
            </article>
        })}
    </div>
}

export default Items;
