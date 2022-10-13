import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-8 sm:px-32 py-2.5 rounded dark:bg-gray-900">
      <div className="flex justify-between items-center flex-wrap">
        <a href="http://www.hidroglass.com.br" className="flex items-center">
          <img
            src="./logo-hidroglass-noBG.png"
            className="h-22 sm:h-18"
            alt="Flowbite Logo"
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-blue_middle rounded-lg md:hidden hover:text-white hover:bg-blue_dark focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${!open ? 'hidden' : ''} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-blue_middle md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li className="duration-300 hover:ml-4">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded text-blue_dark text-xl hover:bg-blue_dark hover:text-white hover:font-bold"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="duration-300 hover:ml-4">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded text-blue_dark text-xl hover:bg-blue_dark hover:text-white hover:font-bold"
                aria-current="page"
              >
                Empresa
              </a>
            </li>
            <li className="duration-300 hover:ml-4">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded text-blue_dark text-xl hover:bg-blue_dark hover:text-white hover:font-bold"
                aria-current="page"
              >
                Mercado
              </a>
            </li>
            <li className="duration-300 hover:ml-4">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded text-blue_dark text-xl hover:bg-blue_dark hover:text-white hover:font-bold"
                aria-current="page"
              >
                Produto
              </a>
            </li>
            <li className="duration-300 hover:ml-4">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded text-blue_dark text-xl hover:bg-blue_dark hover:text-white hover:font-bold"
                aria-current="page"
              >
                Tabela
              </a>
            </li>
            <li className="duration-300 hover:ml-4">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded text-blue_dark text-xl hover:bg-blue_dark hover:text-white hover:font-bold"
                aria-current="page"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
