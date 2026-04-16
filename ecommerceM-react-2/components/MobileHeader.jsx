import { useState } from "react";
import Sidebar from "./SideBar";
import { GoSidebarCollapse } from "react-icons/go";
import { MdOutlineInstallMobile } from "react-icons/md";
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
        <span className="mobile_header_left">
            <span className="menu_icon" onClick={toggleSidebar}> <GoSidebarCollapse /> </span>
            <Link to="/"><img src="..\public\images\myntra_logo.webp" alt="" /></Link>
        </span>
        <span className="mobile_header_right">
            <MdOutlineInstallMobile />
            <CiHeart />
             <Link className="action_container" to="/Bag">
                <HiOutlineShoppingBag />
                <span className="bag-item-count">{cart.length}</span>
            </Link>
        </span>
        
    </header>
    <Sidebar isOpen={isOpen}
    toggleSidebar={toggleSidebar}/>
</>)
};
export default MobileHeader;