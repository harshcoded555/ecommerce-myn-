import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { cartItemActions } from "../store/cartItemSlice";
import { useEffect } from "react";

const HomeItems = ({perItem}) => {
const dispatch = useDispatch();

let cartId = useSelector(store => store.cart);
const isInCart = cartId.includes(perItem.id);

const handleAddCart = () => {
    dispatch(cartActions.addCart(perItem.id));
    dispatch(cartItemActions.addToCartItem(perItem))
};
const handleRemoveCart = () => {
    dispatch(cartActions.removeCart(perItem.id));
    dispatch(cartItemActions.removeCartItem(perItem))
};
 useEffect(() =>{
    window.scrollTo(0,0);
  },[]);
return(<>
    <div className="bagitems_container">
      <img src={perItem.image} alt="" />
       <div className="bagitems_rating">{perItem.rating.stars} ⭐
 | {perItem.rating.count}</div>   
       <div className="bagitems_company">{perItem.company}</div>
       <div className="bagitems_discription">{perItem.item_name}</div>
       <div className="bagitems_price">
        <span className="bagitems_currentprice">Rs {perItem.current_price}</span>
        <span className="bagitems_ogprice">   {perItem.original_price}</span>
        <span className="bagitems_discount">({perItem.discount_percentage}% OFF)</span>
    </div>
    {isInCart ? <button className="remove_cart" onClick={handleRemoveCart}>Remove</button>:<button className="add_cart" onClick={handleAddCart}>Add   To   Cart</button>}
    </div>
</>)

}
export default HomeItems;