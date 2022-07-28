import dio from '../images/dio.png';
import Trybe from '../images/trybeLogo.png';
import Udemy from '../images/udemy.png';

const Certifications = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-10 ">
      <div className="mt-12">
        <h1 className="text-white font-bold">Certificações</h1>
      </div>
      <div className="flex flex-wrap gap-2 w-96   ">
        <img src={Trybe} />
        <div className="flex flex-col  ">
          <p className="">Fundamentos do </p>
          <p className="text-sm font-light">Desenvolvimento Web</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 w-96   ">
        <img src={Trybe} />
        <div className="flex flex-col ">
          <p className="">Desenvolvimento</p>
          <p className="text-sm font-light"> front-end web</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 w-96 ">
        <img src={Udemy} />
        <div className="flex flex-col ">
          <p className="">Docker para Desenvolvedores </p>
          <p className="text-sm font-light">Swarm e kubernetes</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 w-96 ">
        <img src={Udemy} />
        <div className="flex flex-col ">
          <p className="">SASS e SCSS </p>
          <p className="text-sm font-light">do básico ao avançado</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 w-96  ">
        <img src={dio} />
        <div className="flex flex-col ">
          <p className="">Introdução a criação de websites</p>
          <p className="text-sm font-light">com HTML5 e CSS3</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 w-96  ">
        <img src={dio} />
        <div className="flex flex-col ">
          <p className="">Lógica de programação</p>
          <p className="text-sm font-light">essencial</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
