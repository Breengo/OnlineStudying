import xmarkSVG from "../assets/xmark.svg";
import { setShownWindow } from "../redux/slices/itemCreationWindowSlice";
import { useAppDispatch } from "../redux/store";
const WindowClose = () => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(setShownWindow(null));
  };
  return (
    <img
      onClick={clickHandler}
      className="h-12 absolute top-1 right-1 mx-8 mt-4 cursor-pointer opacity-60 hover:opacity-100 hover:scale-105"
      src={xmarkSVG}
      alt="error"
    />
  );
};

export default WindowClose;
