import { useContext } from "react"
import { CartContext } from "../../context/CartContex"
import cartLogo from "../../assets/cartLogo.png"
import { Link } from "react-router-dom"
import "./cartwidget.css"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="nav-item">
            <a className="nav-link" href="">
            <img src={cartLogo} alt="cartLogo" className={quantity === 0 ? "empty-cart" : "cart-logo"} />
            { quantity >= 1 && quantity }
            </a>
        </Link>

    )
}

export default CartWidget