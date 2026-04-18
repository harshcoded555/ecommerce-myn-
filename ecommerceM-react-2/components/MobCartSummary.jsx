import { RxCross2 } from "react-icons/rx";
import { FaArrowsRotate } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/cartItemSlice";
import { cartActions } from "../store/cartSlice";

const MobCartSummary = ({item}) => {
    let dispatch= useDispatch();
    const handleRemove = () => {
            dispatch(cartActions.removeCart(item.id));
            dispatch(cartItemActions.removeCartItem(item));
        };

    return(<>
    <div className="item-summary-container">
            <img src={item.image} alt="" />
            <div className="item-details">
              <div className="item-title-container">
                <div className="item-comp">{item.company}</div>
                <span onClick={handleRemove}>
                  <RxCross2 />
                </span>
              </div>
              <div className="item-comp-detail">
                {item.item_name}
              </div>
              <div className="item-soldby">Sold by : MYNTRA_CLONE</div>
              <div className="sizeandqty">
                <div className="SQ">Size: 40</div>
                <div className="SQ">Qty: 1</div>
              </div>
              <div className="mob-price-detail">
                <span className="mob-curr-price">{item.current_price}</span>
                <span className="mob-og-price">{item.original_price}</span>
                <span className="mob-dis-price">{item.discount_percentage}% OFF</span>
              </div>
              <div className="return-policy">
                <span className="return-timeline">
                  <FaArrowsRotate /> {item.delivery_date}{" "}
                </span>
                <span>return available</span>
              </div>
            </div>
          </div>
    </>)
}
export default MobCartSummary;