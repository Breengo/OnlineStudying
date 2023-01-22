import React from "react";

interface ISelector {
  selectList: string[];
  selectorRef: React.RefObject<HTMLButtonElement>;
  secondSelectorRef: React.RefObject<HTMLButtonElement>;
  selectorTitle: string;
  setChoiced: (choiced: string[]) => void;
  choiced: string[];
}

const Selector: React.FC<ISelector> = ({
  selectList,
  selectorRef,
  secondSelectorRef,
  selectorTitle,
  setChoiced,
  choiced,
}) => {
  const [showSelector, setShowSelector] = React.useState(false);

  const handleChoice = (select: string) => {
    if (choiced.indexOf(select) === -1) {
      setChoiced([...choiced, select]);
    } else {
      const tempArr = choiced.slice(0);
      tempArr.splice(choiced.indexOf(select), 1);
      setChoiced(tempArr);
    }
  };

  const selectHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const listener = (e: MouseEvent) => {
      if (
        (showSelector && e.target === selectorRef.current) ||
        e.target === secondSelectorRef.current
      ) {
        setShowSelector(false);
        window.removeEventListener("click", listener);
      }
    };
    setShowSelector(true);
    window.addEventListener("click", listener);
  };

  return (
    <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
      <label className="mr-4 w-4/12">{selectorTitle}</label>
      <div className="relative w-full">
        <button
          ref={selectorRef}
          onClick={selectHandler}
          className={
            "outline-none bg-transparent border-2  w-full p-2 text-xl border-blue-600 border-2 hover:bg-blue-600 hover:text-white" +
            (showSelector
              ? " rounded-t-md bg-blue-600 text-white"
              : " rounded-md")
          }
        >
          Add {selectorTitle.toLowerCase()}
        </button>
        {showSelector && (
          <ul className="absolute w-full top-12 right-0 bg-opacity-80 bg-blue-500 rounded-b-md text-white h-60 overflow-y-scroll scrollbar-hide z-10">
            {selectList.map((item, index) => {
              let styleParams = "";
              if (choiced.indexOf(item) !== -1) {
                styleParams = " bg-blue-600";
              }
              if (index !== selectList.length - 1) {
                return (
                  <li
                    onClick={() => handleChoice(item)}
                    className={
                      "hover:bg-blue-600 p-4 cursor-pointer" + styleParams
                    }
                  >
                    {item}
                  </li>
                );
              } else {
                return (
                  <li
                    onClick={() => handleChoice(item)}
                    className={
                      "hover:bg-blue-600 p-4 cursor-pointer rounded-b-md" +
                      styleParams
                    }
                  >
                    {item}
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Selector;
