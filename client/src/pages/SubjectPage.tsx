import axios from "../axios";
import React from "react";
import { useParams } from "react-router-dom";
import NewModuleBlock from "../components/NewModuleBlock";
import SubjectModuleBox from "../components/SubjectModuleBox";
import SubjectPageHeader from "../components/SubjectPageHeader";
import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchSubjectInfo } from "../redux/thunks/fetchSubjectInfo";

const SubjectPage = () => {
  const dispatch = useAppDispatch();
  const subjectInfo = useSelector(
    (state: RootState) => state.subjectInfo.subjectInfo
  );
  const subjectID = useParams().id;
  React.useEffect(() => {
    if (subjectID) {
      dispatch(fetchSubjectInfo(subjectID));
    }
  }, []);

  if (!subjectInfo) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <InfinitySpin width="200" color="#315dd6" />
        <h1 className="text-3xl font-bold text-blue-500">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 flex justify-center font-mono">
      <div className="w-7/12">
        <SubjectPageHeader
          teacher={subjectInfo.teacher}
          headerText={subjectInfo.headerText}
          subjectName={subjectInfo.subjectName}
        />
        {subjectInfo.moduleList.map((item, index) => (
          <SubjectModuleBox
            key={item.moduleName + index}
            moduleName={item.moduleName}
            moduleID={item._id}
          />
        ))}
        <NewModuleBlock />
      </div>
    </div>
  );
};

export default SubjectPage;
