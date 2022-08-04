import computer from '../images/computer.svg';
const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="items-center  justify-center mt-36 flex flex-col">
        <img src={computer} alt="computer " className="mb-10" />
        <h1 className="text-white font-bold">VITÓRIA HOLANDA</h1>
        <h1 className="text-white font-extralight">Dev Front-end</h1>
      </div>
    </div>
  );
};

export default HomePage;
