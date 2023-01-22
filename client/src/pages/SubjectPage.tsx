import SubjectModuleBox from "../components/SubjectModuleBox";
import SubjectPageHeader from "../components/SubjectPageHeader";

const SubjectPage = () => {
  return (
    <div className="pt-40 pb-20 flex justify-center font-mono">
      <div className="w-7/12">
        <SubjectPageHeader />
        <SubjectModuleBox />
        <SubjectModuleBox />
        <SubjectModuleBox />
        <SubjectModuleBox />
      </div>
    </div>
  );
};

export default SubjectPage;
