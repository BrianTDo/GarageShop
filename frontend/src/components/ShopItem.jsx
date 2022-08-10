import { useDispatch } from "react-redux";
import { deleteShop } from '../features/shops/shopSlice'

function ShopItem({ shop }) {
  const dispatch = useDispatch();
  return (
    <div className="shop">
      <div>{new Date(shop.createdAt).toLocaleString("en-US")}</div>
      <h2>{shop.name}</h2>
      <button onClick={() => dispatch(deleteShop(shop._id))} className="close">
        X
      </button>
    </div>
  );
}

export default ShopItem;
