import { useState } from "react";
import { DistributeVertical } from "react-bootstrap-icons";

const SizeSelector = ({
  currItemSize,
  toggleSizeChange,
  size,
  toggleSize,
  selectedSize,
  setSelectedSize,
}) => {
  const sizes = [38, 40, 42, 44];
  const effectiveSize = currItemSize ?? selectedSize;
  const showOneSize = effectiveSize === "OneSize" || selectedSize === "OneSize";
  const availableSizes = effectiveSize && effectiveSize !== "OneSize"
    ? Array.from(new Set([effectiveSize, ...sizes])).sort((a, b) => Number(a) - Number(b))
    : sizes;

  const handleSizeSelect = (sizeValue) => {
    setSelectedSize(sizeValue);
  };

  const handleDone = () => {
    if (selectedSize !== null && selectedSize !== undefined && selectedSize !== "") {
      toggleSize();
      toggleSizeChange();
    }
  };

  return (
    <>
      {size && <div className="size_overlay" onClick={toggleSize}></div>}
      <div className={`size_container ${size ? "size_container_active" : ""}`}>
        <div className="size_header">Select Size</div>
        <div className="size_buttons">
            {showOneSize ? (
              <button
                className={`size_btn_OneSize ${selectedSize === "OneSize" ? "size_btn_active" : ""}`}
                onClick={() => handleSizeSelect("OneSize")}
              >
                OneSize
              </button>
            ) : (
              availableSizes.map((sizeValue) => (
                <button
                  key={sizeValue}
                  className={`size_btn ${selectedSize === sizeValue ? "size_btn_active" : ""}`}
                  onClick={() => handleSizeSelect(sizeValue)}
                >
                  {sizeValue}
                </button>
              ))
            )}
        </div>
        <div className="size_seller">
          seller : <span>MYNTRA_CLONE</span>
        </div>
        <div className="size_done">
          <button onClick={handleDone} disabled={!selectedSize}>
            DONE
          </button>
        </div>
      </div>
    </>
  );
};
export default SizeSelector;
