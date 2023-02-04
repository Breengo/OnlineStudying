import React from "react";

import SubjectBox from "../components/SubjectBox";
import searchSVG from "../assets/search.svg";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchSubject } from "../redux/thunks/fetchSubjects";
import { useSelector } from "react-redux";
import debounce from "../utils/debounce";
import { clearSubjectInfo } from "../redux/thunks/fetchSubjectInfo";

const MainPage = () => {
  const [focus, setFocus] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [subjFilter, setSubjFilter] = React.useState("");
  const dispatch = useAppDispatch();
  const subjects = useSelector(
    (state: RootState) => state.subjectList.subjectList
  );

  const debSetSubjFilter = React.useCallback((value: string) => {
    return debounce(() => setSubjFilter(value), 300);
  }, []);

  React.useEffect(() => {
    dispatch(fetchSubject());
    dispatch(clearSubjectInfo());
  }, []);

  return (
    <div className="min-h-screen w-full pt-32 pb-20 px-12 font-mono">
      <div className="w-full flex justify-center">
        <div
          className={
            "w-5/12 flex items-center border-2 rounded-md" +
            (focus ? " border-blue-600" : " border-blue-400")
          }
        >
          <img
            className={"h-12" + (focus ? " opacity-100" : " opacity-60")}
            src={searchSVG}
            alt="error"
          />
          <input
            placeholder="Search for subject"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(e.target.value);
              debSetSubjFilter(e.target.value);
            }}
            value={searchText}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="px-4 text-xl font-semibold outline-none rounded-md h-full w-full"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center">
        {subjects &&
          subjects
            .filter((item) =>
              item.subjectName.toLowerCase().includes(subjFilter.toLowerCase())
            )
            .map((item) => (
              <SubjectBox
                key={item._id}
                subjectId={item._id}
                teacher={item.teacher}
                subjectName={item.subjectName}
                groups={item.groups}
              />
            ))}
      </div>
    </div>
  );
};

export default MainPage;
