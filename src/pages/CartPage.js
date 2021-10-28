import React,{useEffect} from 'react'
import NavigationBar from '../components/NavigationBar'
import {useSelector,useDispatch} from 'react-redux'
import {FaPlus,FaMinus,FaTrashAlt} from 'react-icons/fa'
import {increaseQuantity,decreaseQuantity,removeFromCart,clearCart, setTotal} from '../actions'

function CartPage() {
    const cart = useSelector(state => state.cart);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    useEffect(() => {
        let cartTotal = 0;
        cart.map((item) => {
            return cartTotal += item.price * item.quantity; 
        })
        dispatch(setTotal(cartTotal))
    }, [cart,dispatch])

    return (
        <>
            <NavigationBar/>
            <h4 className="heading">My Cart</h4>
            <hr className="line"/>
            {cart.length<1 ? <h2 className="heading">Cart is empty</h2> :
            <>
            <table >
            <thead>
                <tr>
                    <td>Sl.no</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {cart.map((item,index) => {
                    const {id,name,price,quantity} = item;
                    return <tr key={id}>
                        <td>{index+1}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td><span className="qtybtn" onClick={()=>dispatch(decreaseQuantity(id))}><FaMinus/></span> {quantity} <span className="qtybtn" onClick={()=>dispatch(increaseQuantity(id))}><FaPlus/></span></td>
                        <td className="remove-btn" onClick={()=>dispatch(removeFromCart(id))}><FaTrashAlt/>remove</td>
                    </tr>
                })}
            </tbody>
            </table>
            <hr className="cartHr"/> 
            <button className="clear-btn clear-btn-pos" onClick={()=>dispatch(clearCart())}>Clear cart</button>
            <span className="total">Rs.{total}/-</span>
            </>
            }
        </>
    )
}

export default CartPage
