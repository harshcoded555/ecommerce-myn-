import { RxCross2 } from "react-icons/rx";
import { FaArrowsRotate } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/cartItemSlice";
import { cartActions } from "../store/cartSlice";
import { useState } from "react";
import SizeSelector from "./SizeSelector";

const MobCartSummary = ({ item, checked, onToggle,size,setSize,toggleSize,toggleQty }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cartActions.removeCart(item.id));
    dispatch(cartItemActions.removeCartItem(item));
  };
  const [selectedSize, setSelectedSize] = useState(item.size || null);

  const toggleSetSize = () =>{
    dispatch(cartItemActions.setSelectedSize({
    id: item.id,
    finalSelectedSize: selectedSize,
  }));
  }

  return (
    <>
      <div className="item-summary-container">
        <div className="cart-img">
          <img src={item.image} alt="" />
          <input
            type="checkbox"
            className="img_checkbox"
            checked={checked}
            onChange={onToggle}
          />
        </div>
        <div className="item-details">
          <div className="item-title-container">
            <div className="item-comp">{item.company}</div>
            <span onClick={handleRemove}>
              <RxCross2 />
            </span>
          </div>
          <div className="item-comp-detail">{item.item_name}</div>
          <div className="item-soldby">Sold by : MYNTRA_CLONE</div>

          <div className="sizeandqty">

            <div className="SQ">
              <div>Size : {item.size}</div>
              <span className="size_select" onClick={toggleSize}>⏷</span>
            </div>

            <div className="SQ">
              <div>Qty : {item.qty}</div>
              <span className="size_select" onClick={toggleQty}>⏷</span>
            </div>
          </div>

          <div className="mob-price-detail">
            <span className="mob-curr-price">{item.current_price}</span>
            <span className="mob-og-price">{item.original_price}</span>
            <span className="mob-dis-price">
              {item.discount_percentage}% OFF
            </span>
          </div>
          <div className="return-policy">
            <span className="return-timeline">
              <FaArrowsRotate /> {item.delivery_date}{" "}
            </span>
            <span>return available</span>
          </div>
        </div>
      </div>
      <SizeSelector size={size} toggleSize={toggleSize} selectedSize={selectedSize} setSelectedSize={setSelectedSize} toggleSetSize={toggleSetSize} itemSizeCheck={item.size} />
    </>
  );
};
export default MobCartSummary;
