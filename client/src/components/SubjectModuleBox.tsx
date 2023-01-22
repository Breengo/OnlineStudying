import ModuleItem from "./ModuleItem";

const SubjectModuleBox = () => {
  return (
    <div className="flex flex-col bg-blue-100 p-8 rounded-lg mb-6">
      <h3 className="font-semibold text-3xl mb-4 ml-10">Module</h3>
      <div className="flex flex-col px-4 pt-4">
        <ModuleItem type={"discussion"} title={"Disscusion"} />
        <ModuleItem type={"doc"} title={"Docs"} />
        <ModuleItem type={"folder"} title={"Folder"} />
        <ModuleItem type={"test"} title={"Test"} />
      </div>
    </div>
  );
};

export default SubjectModuleBox;
