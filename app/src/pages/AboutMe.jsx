import MyPicture from '../images/myProfile.jpeg';
const AboutMe = () => {
  return (
    <div className="mflex items-center justify-center">
      <div className="mt-10 flex flex-col gap-10 justify-center items-center">
        <div className="">
          <img
            src={MyPicture}
            className="mb-3 w-56 h-56 rounded-full shadow-lg"
            alt="vitoria"
          />
        </div>
      </div>
      <div className="ml-8">
        <h1 className="text-white font-bold">Sobre mim</h1>
        <p className="text-white font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          dolorem aliquam consequatur praesentium aliquid optio ullam nulla quo
          mollitia veniam distinctio repudiandae, eos officia omnis voluptatem
          ratione est aperiam quod.
        </p>
      </div>
      <div className=" flex justify-center flex-col items-center mt-10 p-2">
        <h1 className="text-white font-bold">Minhas Skills</h1>
        <div className="bg-transparent border border-white p-4 text-white rounded-md ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quasi
          ratione impedit, nostrum veniam dicta pariatur nobis libero quod, hic
          accusantium id sunt ut? Sequi eum tempore consequuntur aut quos.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
