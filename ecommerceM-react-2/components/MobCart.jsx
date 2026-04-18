import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegTrashCan, FaArrowsRotate } from "react-icons/fa6";
import { TbHeartPlus } from "react-icons/tb";
import MobCartSummary from "./MobCartSummary";
import ShowEmpty from "./ShowEmpty";

const MobCart = ({mobSelectedItem}) => {
    if (mobSelectedItem.length === 0) {
        return <ShowEmpty/>
    }
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
              <input type="checkbox" name="mobcart-checkbox" id="" />
              <div className="items-selected">0/1 ITEMS SELECTED</div>
            </div>
            <div className="mobcart-item-right">
              <span>
                <IoShareSocialOutline />
              </span>
              <span>
                <FaRegTrashCan />
              </span>
              <span>
                <TbHeartPlus />
              </span>
            </div>
          </div>
        </div>

        <div className="item-summary-main" style={{ backgroundColor : "#eef0f1" }} >
        {mobSelectedItem.map((item) => <MobCartSummary item={item}/>)}
        </div>
      </div>
    </>
  );
};
export default MobCart;
