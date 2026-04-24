function QtySelector({qty,toggleQty,selectedQty,setSelectedQty,toggleQtyChange}) {
 const NoOfQty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let handleQtySelected = (qtyValue) => {
    setSelectedQty(qtyValue)
 }
 const handleQtyDone =()=>{
     if (selectedQty !== null && selectedQty !== undefined && selectedQty !== "") {
      toggleQty();
      toggleQtyChange();
    }
 }
  return (
    <>
    {qty && <div className="size_overlay" onClick={toggleQty}></div>}
    <div className={`size_container ${qty ? "size_container_active" : ""}`}>
        <div className="size_header">Select Size</div>
        <div className="qty_buttons">
          {NoOfQty.map((qty) => (
            <button className={`size_btn qty_btn ${selectedQty === qty ? "size_btn_active" : "" }`} onClick={() => handleQtySelected(qty)}>{qty}</button>
          ))}
        </div>
        <div className="size_seller">
          seller : <span>MYNTRA_CLONE</span>
        </div>
        <div className="size_done">
          <button onClick={handleQtyDone}>DONE</button>
        </div>
      </div>
    </>
  );
}
export default QtySelector;
