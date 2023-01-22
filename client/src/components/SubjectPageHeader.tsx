import teacherIMG from "../assets/teacherIMG.png";
const SubjectPageHeader = () => {
  return (
    <header className="flex flex-col bg-blue-100 p-8 rounded-lg mb-6">
      <h3 className="font-bold text-3xl mb-4 ml-10">Subject</h3>
      <div className="flex justify-center">
        <div className="flex flex-col mr-8 w-10/12">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
            excepturi aspernatur, minima nesciunt illo quisquam cupiditate,
            rerum soluta eum ad deserunt laboriosam? Ipsa corporis a, laudantium
            nisi in aliquam similique, fugiat distinctio alias totam repellendus
            laborum nesciunt excepturi eius praesentium facere! Temporibus
            asperiores eius et totam harum quod ea omnis pariatur voluptatibus?
            Ullam ut dolore et vel qui magni unde nulla soluta. Unde totam
            perspiciatis cupiditate natus officia necessitatibus dolorum sed,
            quo, sequi assumenda doloribus ullam fugiat itaque architecto
            pariatur beatae? Debitis maiores minima, repudiandae atque dolor
            nostrum impedit doloremque ipsa necessitatibus quod sed, veritatis
            natus at, itaque repellat! Est dolorum suscipit nesciunt.
            Perferendis incidunt non voluptatibus similique nulla tempora
            reprehenderit ut a, illum ad numqua
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="h-20 w-20 rounded-full"
            src={teacherIMG}
            alt="error"
          />
          <h4 className="text-lg text-blue-500 text-center">Artem Povarnin</h4>
        </div>
      </div>
    </header>
  );
};

export default SubjectPageHeader;
