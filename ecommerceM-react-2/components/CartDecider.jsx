import { useMediaQuery } from "react-responsive";
import Cart from "./Cart";
import MobCart from "./MobCart";
import { useSelector } from "react-redux";

function CartDecider(){
    let mobSelectedItem = useSelector(store => store.cartItem);
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return(<>
     {isTabletOrMobile ? <MobCart mobSelectedItem={mobSelectedItem}/> : <Cart/>}
    </>)
};
export default CartDecider;