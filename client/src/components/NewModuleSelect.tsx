import { useAppDispatch } from "../redux/store";
import { setShownWindow } from "../redux/slices/itemCreationWindowSlice";

interface IModuleSelect {
  icon: string;
  type: string;
}

const NewModuleSelect: React.FC<IModuleSelect> = ({ icon, type }) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    switch (type) {
      case "document":
        dispatch(setShownWindow("Doc"));
        break;
      case "folder":
        dispatch(setShownWindow("Folder"));
        break;
      case "test":
        dispatch(setShownWindow("Test"));
        break;
      case "discussion":
        dispatch(setShownWindow("Discussion"));
        break;
    }
  };
  return (
    <div
      onClick={clickHandler}
      className="flex items-center px-8 py-2 bg-green-200 rounded-b-md cursor-pointer hover:bg-green-300 w-full"
    >
      <img className="h-6 mr-4" src={icon} alt="error" />
      <h6 className="text-xl">New {type}</h6>
    </div>
  );
};
export default NewModuleSelect;
