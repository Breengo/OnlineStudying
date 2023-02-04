import axios from "../axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { fetchSubjectInfo } from "../redux/thunks/fetchSubjectInfo";

interface IRedactorProps {
  headerText: string;
  setShowTextarea: (value: boolean) => void;
}

const HeaderTextRedactor: React.FC<IRedactorProps> = ({
  headerText,
  setShowTextarea,
}) => {
  const [textareValue, setTextAreaValue] = React.useState(headerText);
  const _id = useParams().id;
  const dispatch = useAppDispatch();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const onChangeHandler = () => {
    if (textareaRef.current) {
      setTextAreaValue(textareaRef.current?.value);
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 4
      }px`;
    }
  };
  const onSaveHandler = () => {
    axios
      .put("/subject/updateHeader", {
        _id,
        headerText: textareValue,
      })
      .then((res) => {
        if (_id) {
          dispatch(fetchSubjectInfo(_id));
          setShowTextarea(false);
        }
      });
  };
  return (
    <div className="flex flex-col mr-8 w-10/12">
      <textarea
        value={textareValue}
        onChange={onChangeHandler}
        ref={textareaRef}
        className="resize-none rounded-md h-full w-full outline-none p-4 text-xl h-auto"
      ></textarea>
      <button
        onClick={onSaveHandler}
        className="px-8 py-2 text-xl bg-green-400 rounded-lg mt-4 text-white hover:bg-green-500 self-end w-fit"
      >
        Save
      </button>
    </div>
  );
};

export default HeaderTextRedactor;
