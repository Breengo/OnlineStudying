import axios from "../axios";
import React from "react";
import { useParams } from "react-router-dom";
import NewModuleBlock from "../components/NewModuleBlock";
import SubjectModuleBox from "../components/SubjectModuleBox";
import SubjectPageHeader from "../components/SubjectPageHeader";
import { InfinitySpin } from "react-loader-spinner";
import { IUserData } from "../redux/thunks/fetchTeachers";

interface ISubjectInfo {
  createdAt: string;
  groups: string[];
  moduleList: string[];
  subjectName: string;
  headerText: string;
  teacher: IUserData;
}

const SubjectPage = () => {
  const [subjectInfo, setSubjectInfo] = React.useState<
    ISubjectInfo | undefined
  >();
  const subjectID = useParams().id;
  React.useEffect(() => {
    axios
      .get(`/subject/getById?subjectID=${subjectID}`)
      .then((res) => setSubjectInfo(res.data));
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
        <SubjectModuleBox />
        <SubjectModuleBox />
        <SubjectModuleBox />
        <SubjectModuleBox />
        <NewModuleBlock />
      </div>
    </div>
  );
};

export default SubjectPage;
