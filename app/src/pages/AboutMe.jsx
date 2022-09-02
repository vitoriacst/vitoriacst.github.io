const AboutMe = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center">
        <div className="mt-16 flex flex-col gap-10 justify-center items-center"></div>
        <div className="ml-8 ">
          <h1 className="text-white font-bold mb-4">SOBRE MIM</h1>
          <p className="text-white font-light flex flex-col text-start gap-4">
            Olá, Me chamo Vitória Holanda,tenho 19 anos e sou uma sonhadora e aspirante a desenvolvedora FullStack! 
            <span>
              Tenho pretensões altas para carreira, mas sempre com muito esforço.
            </span>
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-yellow-300"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">JavaScript</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-blue-500"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">React Js</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-orange-400"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">HTML 5</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-blue-800"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">CSS 3</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-blue-700"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">TAILWIND</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-green-800"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">Consumo de API's</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-pink-300"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">Sass e Scss</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-white max-w-sm mb-4 rounded-sm">
            <div className="w-16 bg-red-500"></div>
            <div className="w-auto text-grey-darker items-center p-4">
              <span className="text-lg font-bold pb-4">Testes unitarios</span>
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
