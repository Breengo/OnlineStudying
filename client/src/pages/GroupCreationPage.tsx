const GroupCreationPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <div className="flex flex-col items-center justify-center h-fit w-fit border-2 bg-blue-100 py-2 px-4 rounded-md justify-between">
        <h2 className="text-center font-bold w-full text-3xl mb-6 mt-2">
          New group
        </h2>
        <input
          className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2  w-full mb-8"
          type="text"
        />
        <button className="py-2 px-12 mb-8 text-xl border-blue-600 border-2 rounded-md hover:bg-blue-600 hover:text-white w-full">
          Create
        </button>
      </div>
    </div>
  );
};

export default GroupCreationPage;
