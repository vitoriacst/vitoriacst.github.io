const AboutMe = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="mt-56 flex flex-col gap-10 justify-center items-center"></div>
      <div className="ml-8">
        <h1 className="text-white font-bold">SOBRE MIM</h1>
        <p className="text-white font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          dolorem aliquam consequatur praesentium aliquid optio ullam nulla quo
          mollitia veniam distinctio repudiandae, eos officia omnis voluptatem
          ratione est aperiam quod.
        </p>
      </div>
      <div className=" flex justify-center flex-col items-center mt-10 gap-2 p-2">
        <h1 className="text-white font-bold">MINHAS SKILLS</h1>
        <div className="bg-transparent border border-white p-4 text-white rounded-md ">
          <ul className="flex gap-2 flex-col">
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quasi
              ratione impedit, nostrum veniam dicta pariatur nobis libero quod,
              hic accusantium id sunt ut? Sequi eum tempore consequuntur aut
              quos.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quasi
              ratione impedit, nostrum veniam dicta pariatur nobis libero quod,
              hic accusantium id sunt ut? Sequi eum tempore consequuntur aut
              quos.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quasi
              ratione impedit, nostrum veniam dicta pariatur nobis libero quod,
              hic accusantium id sunt ut? Sequi eum tempore consequuntur aut
              quos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
