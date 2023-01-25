import React from "react";

interface ISelector {
  selectList: string[];
  selectorTitle: string;
  allowedNumber?: number;
  setChoiced: (choiced: string[]) => void;
  choiced: string[];
}

const Selector: React.FC<ISelector> = ({
  selectList,
  allowedNumber,
  selectorTitle,
  setChoiced,
  choiced,
}) => {
  const [showSelector, setShowSelector] = React.useState(false);
  const selectorRef = React.useRef<HTMLUListElement>(null);
  const isOpened = React.useRef(false);

  function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
      throw new Error(`Node expected`);
    }
  }

  const listener = React.useCallback((e: MouseEvent) => {
    assertIsNode(e.target);
    if (
      isOpened.current &&
      !selectorRef.current?.contains(e.target) &&
      e.target !== selectorRef.current
    ) {
      setShowSelector(false);
      isOpened.current = false;
      window.removeEventListener("click", listener);
    }
    isOpened.current = true;
  }, []);

  const handleChoice = (select: string) => {
    if (choiced.indexOf(select) === -1) {
      if (!allowedNumber || allowedNumber > choiced.length) {
        setChoiced([...choiced, select]);
      }
    } else {
      const tempArr = choiced.slice(0);
      tempArr.splice(choiced.indexOf(select), 1);
      setChoiced(tempArr);
    }
  };

  const selectHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSelector(!showSelector);
    isOpened.current = false;
    window.addEventListener("click", listener);
  };

  return (
    <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
      <label className="mr-4 w-4/12">{selectorTitle}</label>
      <div className="relative w-full">
        <button
          onClick={selectHandler}
          className={
            "outline-none bg-transparent border-2  w-full p-2 text-xl border-blue-600 border-2 hover:bg-blue-600 hover:text-white" +
            (showSelector
              ? " rounded-t-md bg-blue-600 text-white"
              : " rounded-md")
          }
        >
          {choiced[0] ? (
            <div className="flex flex-wrap">
              {choiced.map((item, index) => (
                <h1
                  key={index}
                  className="bg-blue-600 m-2 p-2 rounded-md text-xs text-white"
                >
                  {item}
                </h1>
              ))}
            </div>
          ) : (
            "Add " + selectorTitle.toLowerCase()
          )}
        </button>
        {showSelector && (
          <ul
            ref={selectorRef}
            className="absolute w-full top-12 right-0 bg-opacity-80 bg-blue-500 rounded-b-md text-white h-60 overflow-y-scroll scrollbar-hide z-10"
          >
            {selectList.map((item, index) => {
              let styleParams = "";
              if (choiced.indexOf(item) !== -1) {
                styleParams = " bg-blue-600";
              }
              if (index !== selectList.length - 1) {
                return (
                  <li
                    key={index}
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
                    key={index}
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
