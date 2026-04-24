import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbHeartPlus } from "react-icons/tb";
import MobCartSummary from "./MobCartSummary";
import ShowEmpty from "./ShowEmpty";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemActions } from "../store/cartItemSlice";
import SizeSelector from "./SizeSelector";
import QtySelector from "./QtySelector";
import { cartActions } from "../store/cartSlice";

const MobCart = ({ mobSelectedItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const allCheckbox = useRef(null);

  useEffect(() => {
    const selectedCount = mobSelectedItem.filter(
      (item) => item.selected,
    ).length;
    const total = mobSelectedItem.length;
    if (allCheckbox.current) {
      allCheckbox.current.checked = selectedCount === total && total > 0;
      allCheckbox.current.indeterminate =
        selectedCount > 0 && selectedCount < total;
    }
  }, [mobSelectedItem]);

  const handleAllToggle = (event) => {
    if (event.target.checked) {
      dispatch(cartItemActions.selectAllItems());
    } else {
      dispatch(cartItemActions.deselectAllItems());
    }
  };

  const handleItemToggle = (itemId) => {
    dispatch(cartItemActions.toggleItemSelected(itemId));
  };

  const [qty, setQty] = useState(false);

  const handleDeleteFullCart = () => {
    dispatch(cartItemActions.deleteWholeCart());
    dispatch(cartActions.deleteFullCart());
  }

  
  if (!mobSelectedItem || mobSelectedItem.length === 0) {
    return <ShowEmpty />;
  }

  const selectedCount = mobSelectedItem.filter((item) => item.selected).length;
  const allSelected = selectedCount === mobSelectedItem.length;
  return (
    <>
      <div className="mobcart-container">
        <div className="deli_time">
          <div className="deli_time-left">check delivery time & services </div>
          <div className="deli_time-right">ENTER PIN CODE</div>
        </div>
        <div className="mobcart-item">
          <div className="mobcart-itemselected">
            <div className="mobcart-item-left">
              <input
                style={{ accentColor: "#ff3f6c" }}
                ref={allCheckbox}
                type="checkbox"
                name="mobcart-checkbox"
                className="all_checkbox"
                checked={allSelected}
                onChange={handleAllToggle}
              />
              <div className="items-selected">
                {mobSelectedItem.filter((item) => item.selected).length}/
                {mobSelectedItem.length} ITEMS SELECTED
              </div>
            </div>
            <div className="mobcart-item-right">
              <span>
                <IoShareSocialOutline />
              </span>
              <span onClick={handleDeleteFullCart}>
                <FaRegTrashCan />
              </span>
              <span>
                <TbHeartPlus />
              </span>
            </div>
          </div>
        </div>

        <div
          className="item-summary-main"
          style={{ backgroundColor: "#eef0f1" }}
        >
          {mobSelectedItem.map((item) => (
            <MobCartSummary
              key={item.id}
              item={item}
              checked={item.selected}
              onToggle={() => handleItemToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default MobCart;
