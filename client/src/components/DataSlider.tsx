import React from "react";
import { IGroupData } from "../redux/thunks/fetchGroups";

interface IGroupList {
  dataList: string[];
  style: 1 | 2;
}

const GroupSlider: React.FC<IGroupList> = ({ dataList, style }) => {
  const dataListRef = React.useRef<HTMLUListElement>(null);
  React.useEffect(() => {
    if (dataListRef.current) {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        dataListRef.current?.scrollTo({
          left: dataListRef.current.scrollLeft + e.deltaY * 2,
          behavior: "smooth",
        });
      };

      dataListRef.current.addEventListener("wheel", onWheel);

      return () => dataListRef.current?.removeEventListener("wheel", onWheel);
    }
  }, []);
  return (
    <ul
      ref={dataListRef}
      className="flex w-full overflow-x-auto pt-2 shrink-0 scrollbar-hide"
    >
      {dataList.map((item, index) => (
        <li
          key={index}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className={
            style === 1
              ? "mr-2 mb-2 text-blue-400 p-1 hover:bg-blue-200 whitespace-nowrap border-2 border-blue-400 rounded-lg"
              : "mr-2 mb-2 text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200 w-fit"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default GroupSlider;
