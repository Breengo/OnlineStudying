import docSVG from "../assets/doc.svg";
import disscusionSVG from "../assets/discussion.svg";
import videoSVG from "../assets/video.svg";
import testSVG from "../assets/test.svg";
import redactSVG from "../assets/redact.svg";

interface IItemType {
  type: "document" | "video" | "discussion" | "test";
  title: string;
}

const ModuleItem: React.FC<IItemType> = ({ type, title }) => {
  let icon = docSVG;
  switch (type) {
    case "document":
      icon = docSVG;
      break;
    case "video":
      icon = videoSVG;
      break;
    case "test":
      icon = testSVG;
      break;
    case "discussion":
      icon = disscusionSVG;
      break;
  }

  return (
    <div className="flex w-full items-center">
      <div className="flex items-center px-8 py-2 bg-blue-200 rounded-md cursor-pointer hover:bg-blue-300 mb-4 w-full">
        <img className="h-6 mr-4" src={icon} alt="error" />
        <h6 className="text-xl">{title}</h6>
      </div>
      <div className="pb-4 ml-2">
        <img
          className="h-8 opacity-40 hover:opacity-90 cursor-pointer"
          src={redactSVG}
          alt="error"
        />
      </div>
    </div>
  );
};

export default ModuleItem;
