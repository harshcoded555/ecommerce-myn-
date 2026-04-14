import { BsFillPersonFill } from 'react-icons/bs';
import { FaBagShopping, FaFaceGrinHearts } from 'react-icons/fa6';
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Header = () => {
    let cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(authActions.logout());
    };

    return (<>
    <header>
        <Link className="logo_container" to="/">
            <img
            className="myntra_logo"
            src="images/myntra_logo.webp"
            />
        </Link>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">home & living</a>
            <a href="#">beauty</a>
            <a href="#" className='studio'>studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
              <span className="material-symbols-outlined search_icon">search</span>
              <input type="text" className="search_input" placeholder="search for products, brands and more" />
        </div>
        <div className="action_bar">
            <div className="action_container">
                 <BsFillPersonFill/>
                <span className="action_name">{user?.username || 'profile'}</span>
            </div>
            <div className="action_container">
                <FaFaceGrinHearts/>
                <span className="action_name">wishlist</span>
            </div>
            <Link className="action_container" to="/Bag">
                <FaBagShopping/>
                <span className="action_name">bag</span>
                <span className="bag-item-count">{cart.length}</span>
            </Link>
            <button 
                className="logout-btn"
                onClick={handleLogout}
                title="Logout"
            >
                Logout
            </button>
        </div>
    </header>
    </>)
}
export default Header;