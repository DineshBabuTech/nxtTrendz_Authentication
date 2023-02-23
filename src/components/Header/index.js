// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <div className="nav-menu">
        <li className="header-text">Home</li>
        <li className="header-text">Products</li>
        <li className="header-text">Cart</li>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>
      <img
        className="logout-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </nav>
    <div className="nav-icons">
      <img
        className="nav-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        className="nav-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        className="nav-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </>
)

export default Header
