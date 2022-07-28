import Trybe from '../images/trybeLogo.png';
import Udemy from '../images/udemy.png';
import dio from '../images/dio.png';

const Certifications = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-3">
      <div className="mt-8">
        <h1 className="text-white">Certifications</h1>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <img src={Trybe} />
        <div className="flex flex-col items-center">
          <p className="">Lorem sit amet consectetur</p>
          <p className="text-sm">Lorem sit amet consectetur</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <img src={Trybe} />
        <div className="flex flex-col items-center">
          <p className="">Lorem sit amet consectetur</p>
          <p className="text-sm">Lorem sit amet consectetur</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <img src={Udemy} />
        <div className="flex flex-col items-center">
          <p className="">Lorem sit amet consectetur</p>
          <p className="text-sm">Lorem sit amet consectetur</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <img src={Udemy} />
        <div className="flex flex-col items-center">
          <p className="">Lorem sit amet consectetur</p>
          <p className="text-sm">Lorem sit amet consectetur</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <img src={dio} />
        <div className="flex flex-col items-center">
          <p className="">Lorem sit amet consectetur</p>
          <p className="text-sm">Lorem sit amet consectetur</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <img src={dio} />
        <div className="flex flex-col items-center">
          <p className="">Lorem sit amet consectetur</p>
          <p className="text-sm">Lorem sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
