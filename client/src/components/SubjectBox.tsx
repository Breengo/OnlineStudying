import { Link } from "react-router-dom";

const SubjectBox = () => {
  return (
    <Link
      to={`/subject/${314}`}
      className="border-2 border-gray-500 w-1/5 h-fit p-6 rounded-md m-8 cursor-pointer hover:bg-blue-100 shadow-xl shadow-blue-100"
    >
      <h5 className="text-4xl text-center mb-4">Subject</h5>
      <h6 className="text-xl mb-2">
        Teacher:{" "}
        <span
          className="text-blue-600 hover:underline"
          onClick={() => console.log("asdfasdf")}
        >
          Artem Povarnin
        </span>
      </h6>
      <h6 className="text-xl">
        Groups:
        <ul className="flex flex-wrap w-fit pt-2">
          <li className="mr-2 mb-2 text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200">
            720-1
          </li>
          <li className="mr-2 mb-2  text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200">
            720-2
          </li>
          <li className="mr-2 mb-2 text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200">
            730-1
          </li>
          <li className="mr-2 mb-2  text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200">
            730-2
          </li>
          <li className="mr-2 mb-2 text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200">
            740-1
          </li>
          <li className="mr-2 mb-2  text-blue-600 border-2 border-blue-600 p-1 rounded-md hover:bg-blue-200">
            740-2
          </li>
        </ul>
      </h6>
    </Link>
  );
};

export default SubjectBox;
