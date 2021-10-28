import {Link} from 'react-router-dom'
import {FaHome,FaShoppingCart} from 'react-icons/fa'
import {ImExit} from 'react-icons/im'

function NavigationBar() {
    return (
        <nav>
            <h2 className="nav-title">Welcome</h2>
            <section className="navlinks-container">
                <span >
                    <Link className="navlinks" to="/"><FaHome className="navIcon"/>Home</Link>
                </span>
                <span>
                    <Link className="navlinks" to="/cart"><FaShoppingCart/>MyCart</Link>
                </span>
                <span className="navlinks">
                    <ImExit/>Logout
                </span>
            </section>
            <hr/>
        </nav>
    )
}

export default NavigationBar
