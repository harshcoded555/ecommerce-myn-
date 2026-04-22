import { useState } from "react";

const SizeSelector = ({ size, toggleSize,selectedSize, setSelectedSize,toggleSetSize,itemSizeCheck }) => {
    const sizes = [38, 40, 42, 44];

    const handleSizeSelect = (sizeValue) => {
        setSelectedSize(sizeValue);
    };

    const handleDone = () => {
        if (selectedSize) {
            console.log("Selected size:", selectedSize);
            toggleSize();
            toggleSetSize();
        }
    };

    return (
        <>
            {size && <div className="size_overlay" onClick={toggleSize}></div>}
            <div className={`size_container ${size ? "size_container_active" : ""}`}>
                <div className="size_header">Select Size</div>
                <div className="size_buttons">
                    {itemSizeCheck ==="OneSize" ? (
                        <button 
                            className={`size_btn ${selectedSize === "OneSize" ? "size_btn_active" : ""}`}
                            onClick={() => handleSizeSelect("OneSize")}
                        >
                            OneSize
                        </button>
                    ) : (
                        sizes.map((sizeValue) => (
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