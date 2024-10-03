import cartLogo from "../../assets/cartLogo.png"
import "./cartwidget.css"

const CartWidget = () => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="./carrito.html">carrito
            <img src={cartLogo} alt="cartLogo" className="cartLogo" />
            1
            </a>
        </li>

    )
}

export default CartWidget