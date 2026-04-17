import { useState } from "react";
import Sidebar from "./SideBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrDownload } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const MobileHeader = () => {
    let cart = useSelector(store => store.cart);
    const [isOpen,SetIsOpen] = useState(false);
    const toggleSidebar = () => {
        SetIsOpen(!isOpen)
    }
return(<>
    <header className="mobheader_main_container">
  <div className="mobheader_left">
    <div className="menu_icon" onClick={toggleSidebar}>
      <RxHamburgerMenu />
    </div>

    <Link to="/">
      <img src="/images/myntra_logo.webp" alt="logo" />
    </Link>
  </div>

  <div className="mobheader_right">
    <span className="icon">
      <GrDownload />
    </span>

    <span className="icon">
      <CiHeart />
    </span>

    <Link className="mob_action_container mobbag" to="/Bag">
      <HiOutlineShoppingBag />
      <span className="mob_bag_item_count">{cart.length}</span>
    </Link>
  </div>
</header>

<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
</>)
};
export default MobileHeader;