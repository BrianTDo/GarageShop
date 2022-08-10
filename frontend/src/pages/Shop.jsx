import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getShops, reset } from "../features/shops/shopSlice";

function Shop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { shops, isLoading, isError, message } = useSelector(
    (state) => state.shops
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getShops());

    return () => dispatch(reset);
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      
    </>
  );
}

export default Shop;
