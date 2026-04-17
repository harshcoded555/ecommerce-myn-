import { IoMdRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { cartItemActions } from "../store/cartItemSlice";

const BagSummary = ({item}) => {
    const dispatch = useDispatch();
    
    const handleRemove = () => {
        dispatch(cartActions.removeCart(item.id));
        dispatch(cartItemActions.removeCartItem(item));
    };
    
   
    return (<>
   <div className="bagsummary_box">
        <div className="bagsummary_left">
            <img src={item.image} alt="error" />
        </div>
        <div className="bagsummary_right">
            <div className="bagsummary_cross_company">
                <span>{item.company}</span>
                <span onClick={handleRemove} style={{cursor: "pointer"}}><IoMdRemoveCircle /></span>
            </div>
        <span>{item.item_name}</span>
        <div className="bagsummary_pricing">
            <span className="bagsummary_curr_price">Rs {item.current_price}</span>
            <span className="bagsummary_og_price">Rs{item.original_price}</span>
            <span className="bagsummary_dis_percent">({item.discount_percentage}%OFF)</span>
        </div>
        <div className="return_delivery" style={{marginTop : "10px"}}>
            <span style={{fontWeight : "600"}}>{item.return_period} days </span><span>return available</span>
            <br />
            <span style={{fontSize : "13px"}}>Delivery by</span><span style={{color : "green",fontSize : "13px"}}> {item.delivery_date}</span>
        </div>
    </div>
    </div>
    </>)
};
export default BagSummary;