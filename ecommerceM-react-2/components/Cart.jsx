import BagValue from "./BagValue";
import BagSummary from "./BagSummary";
import { useSelector } from "react-redux";
import ShowEmpty from "./ShowEmpty";
import { useEffect } from "react";

const Cart = () => {
    let selectedCartItem = useSelector(store => store.cartItem);
    console.log(selectedCartItem);
    
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    
    if (selectedCartItem.length === 0) {
        return <ShowEmpty/>
    }
    return (<>
    <div className="cart_main_container">
        <div className="bagsummary_container" style={{marginTop : "45px"}}>
            {selectedCartItem.map((item) => <BagSummary key={item.id} item={item}/>)}
        </div>
        <div className="bagvalue_container"><BagValue item={selectedCartItem} /></div>
    </div>
    </>)
}
export default Cart;