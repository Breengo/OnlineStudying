import { ShownWindowType } from "./SubjectModuleBox";

interface IModuleSelect {
  icon: string;
  type: string;
  setShownWindow: (window: ShownWindowType) => void;
}

const NewModuleSelect: React.FC<IModuleSelect> = ({
  icon,
  type,
  setShownWindow,
}) => {
  const clickHandler = () => {
    switch (type) {
      case "document":
        setShownWindow("Doc");
        break;
      case "video":
        setShownWindow("Video");
        break;
      case "test":
        setShownWindow("Test");
        break;
      case "discussion":
        setShownWindow("Discussion");
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
