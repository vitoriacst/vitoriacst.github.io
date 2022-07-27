import computer from '../images/computer.svg';
const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="items-center  justify-center mt-72 flex flex-col">
        <img src={computer} alt="computer " className="mb-10" />
        <h1 className="text-white font-bold">VITÓRIA HOLANDA</h1>
        <h1 className="text-white font-extralight">Dev Front-end</h1>
        <button className="bg-transparent hover:bg-blue-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mt-8">
          SOBRE MIM
        </button>
      </div>
    </div>
  );
};

export default HomePage;
