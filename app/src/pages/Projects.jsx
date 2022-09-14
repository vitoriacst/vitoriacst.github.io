import recipeApp from '../images/appDeReceitas.png';
import blogsApi from '../images/BlogsApi.png';
import gameStore from '../images/gameStore.png';
import smithStore from '../images/smithStore.png';
import Tfc from '../images/Tfc.png';
import todoList from '../images/todoList.png';
import trybeTunes from '../images/trybeTunes.png';
import wallet from '../images/Wallet.png';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4  ">
      <h1 className="text-white font-bold mb-10">MEUS PROJETOS</h1>
      <div className="flex flex-col justify-center items-center text-white gap-10 lg:flex-row lg:flex-wrap lg:p-12 lg:gap-6 lg:ml-80">
        <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap ">
          <a
            href="https://github.com/vitoriacst/Music_Plataform"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={trybeTunes}
              alt=""
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Trybe Tunes
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                O Trybe Tunes foi um projeto Baseado em um Aplicativo de
                plataforma de Música.
                Sendo esse projeto construído usando JavaScript, React.js e muitos artifícios do ES6 para a filtragem de dados oriundos da API.
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JavaScript
                </span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ES6
                </span>
                <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React Js
                </span>
                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Redux
                </span>
                <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Html 5
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Css 3
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Recipes-App"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={recipeApp}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Aplicativo de Receitas
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               O aplicativo de receitas foi um projeto realizado em grupo ,onde tivemos a experiência de trabalhar em um rotina semelhante ao mercado de trabalho!
               <p>
               Sendo Realizado em menos de 9 dias e com uma
               </p>
               <p className='font-bold'>
                cobertura de testes de 100%.
               </p>
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JavaScript
                </span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ES6
                </span>
                <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React Js
                </span>
                <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Context Api
                </span>
                <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Html 5
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Css 3
                </span>
                <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Testes Unitários
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Todo-List-TypeScript-"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={todoList}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Todo List - TypeScript
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               O Todo List foi um projeto pessoal desenvolvido durante o curso de TypeScript na udemy,visando aprender mais sobre a utilização de typeScript no Front-end.
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JavaScript
                </span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ES6
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  TypeScript
                </span>
                <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React Js
                </span>
                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  TypeScript
                </span>
                <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Html 5
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Css 3
                </span>
                <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React Hooks
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Wallet"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={wallet}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Aplicativo de Carteira
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              O Aplicativo de Carteira foi um projeto desenvolvido durante o curso da trybe ,tal projeto visava a construção de uma aplicação de Carteira que organizava as despesas da pessoa Usuária.
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JavaScript
                </span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ES6
                </span>
                <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React Js
                </span>
                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Context-api
                </span>
                <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Html 5
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Css 3
                </span>

              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Game_Store"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={gameStore}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Game Store
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               Projeto desenvolvido durante o curso de Sass e Scss na udemy, tendo a sua interface voltada para uma loja de periféricos gamers.
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Html 5
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Css 3
                </span>
                <span class="inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Sass
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Futebol_clube"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={Tfc}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Trybe Futebol Clube
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              No projeto Futebol clube houve a criação de uma API RESTful, na sua construção utilizei o modelo MSC e também foi utilizado o TypeScript para a sua construção.
              <p>
              Utilizando os conceitos de Poo e uma abrangente cobertura feita por testes.
              </p>


              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  TypeScript
                </span>
                <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Poo
                </span>
                <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Express
                </span>
                <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Chai
                </span>
                <span class="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Sinon
                </span>
                <span class="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  MySql
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Docker
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Blog_API"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={blogsApi}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Api de um Blog
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              No projeto Blog Api houve a criação de uma API RESTful, na sua construção utilizei o modelo MSC e também foi implementado uma conexão com o banco de dados feita com o ORM SEQUELIZE e a autenticação com Json Web Token.
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Sequelize.js
                </span>
                <span class="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Express Recuse
                </span>
                <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Json web Tokens
                </span>
                <span class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  node.js
                </span>
                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Express.js
                </span>
                <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  DotEnv
                </span>
                <span class="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  MySql
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Docker
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vitoriacst/Smith_typeScript"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src={smithStore}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Smith Store
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              No projeto trybeSmith houve a criação de uma API REST, na sua construção utilizei o modelo Tal API foi idealizada para uma loja medieval.
              </p>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Joi
                </span>
                <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Express Async Erros
                </span>
                <span class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  node.js
                </span>
                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Express.js
                </span>
                <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  DotEnv
                </span>
                <span class="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  MySql
                </span>
                <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Docker
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
