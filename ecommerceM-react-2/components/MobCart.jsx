import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbHeartPlus } from "react-icons/tb";
import MobCartSummary from "./MobCartSummary";
import ShowEmpty from "./ShowEmpty";
import { useState, useEffect, useRef } from "react";

const MobCart = ({ mobSelectedItem }) => {
  const [selectedIds, setSelectedIds] = useState(() => new Set([]));
  const allCheckbox = useRef(null);

  useEffect(() => {
    if (!mobSelectedItem || mobSelectedItem.length === 0) {
      setSelectedIds(new Set([]));
      return;
    }

    setSelectedIds((current) => {
      const next = new Set();
      mobSelectedItem.forEach((item) => {
        if (current.has(item.id)) next.add(item.id);
      });
      return next;
    });
  }, [mobSelectedItem]);

  useEffect(() => {
    const total = mobSelectedItem.length;
    const selectedCount = selectedIds.size;
    if (allCheckbox.current) {
      allCheckbox.current.indeterminate = selectedCount > 0 && selectedCount < total;
    }
  }, [selectedIds, mobSelectedItem.length]);

  const handleAllToggle = (event) => {
    if (event.target.checked) {
      setSelectedIds(new Set(mobSelectedItem.map((item) => item.id)));
    } else {
      setSelectedIds(new Set([]));
    }
  };

  const handleItemToggle = (itemId) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  if (!mobSelectedItem || mobSelectedItem.length === 0) {
    return <ShowEmpty />;
  }

  const allSelected = selectedIds.size === mobSelectedItem.length;

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
              style={{accentColor: "#ff3f6c"}}
                ref={allCheckbox}
                type="checkbox"
                name="mobcart-checkbox"
                className="all_checkbox"
                checked={allSelected}
                onChange={handleAllToggle}
              />
              <div className="items-selected">
                {selectedIds.size}/{mobSelectedItem.length} ITEMS SELECTED
              </div>
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

        <div className="item-summary-main" style={{ backgroundColor: "#eef0f1" }}>
          {mobSelectedItem.map((item) => (
            <MobCartSummary
              key={item.id}
              item={item}
              checked={selectedIds.has(item.id)}
              onToggle={() => handleItemToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default MobCart;
