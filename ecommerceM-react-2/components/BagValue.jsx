const BagValue = ({item}) => {
    let MRP = 0
    let discount = 0
    let total = 0
    let conv = 99

    item.forEach(element => {
        MRP += element.original_price,
        discount += element.original_price - element.current_price,
        total = MRP - discount + conv
    });
    return (<>
    <div className="bagvalue_finalbox">
    <div className="bagvalue_upper_container">
    <span className="head">PRICE DETAILS({item.length} Items)</span>
    <div className="mrp bb">
        <span>Total MRP</span>
        <span>{MRP}</span>
    </div>
    <div className="Discount bb">
        <span>Discount on MRP</span>
        <span style={{color : "green"}}>{discount}</span>
    </div>
    <div className="conv_fee bb">
        <span>Convenience fee</span>
        <span>rs 99</span>
    </div>
    </div>
    <hr className="hr"/>
    <div className="bagvalue_lower_container bb">
        <h4>Total Amount</h4>
        <h4>{total}</h4>
    </div>
    <button className="place_order_btn">PLACE ORDER</button>
        </div>
    </>)
}
export default BagValue;