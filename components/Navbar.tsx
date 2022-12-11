import Link from "next/link";
import CustomLink  from "./CustomLink";

const Nevbar = () => {
  return (

    <nav className="w-full bg-white shadow-md z-50">
      <div className="w-full p-4 py-2 lg:w-[1024px] mx-auto flex flex-wrap items-center justify-between">
        <div className="relative w-full sm:w-auto text-center sm:text-start mb-2 sm:mb-0">
          <Link className="block mt-1 sm:mt-0 text-lg font-bold text-blue-400 hover:text-blue-400" href="/">
              VARIZ
          </Link>
          <button
            type="button"
            className="navbar-toggler block sm:hidden absolute top-0 right-0 bg-purple-400/20 text-gray-400 transition-all duration-700 ease-out hover:bg-gray-100 hover:text-purple-400 rounded p-1"
            data-bs-toggle="collapse"
            data-bs-target="#navigation-button"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden sm:block pl-0 sm:pl-[4vw]">
          <ul className="flex flex-col space-x-0 sm:flex-row md:space-x-4 lg:space-x-8">
            <li>
              <Link className="block px-0 sm:px-4 py-2 sm:py-1.5 text-center border-b-0 sm:border-b-2 text-purple-400 transition duration-300 ease-out hover:text-blue-400 hover:border-purple-400" href="/">         
                  <i className="far fa-house-day"></i> หน้าหลัก 
              </Link>
            </li>
            <li>
              <Link className="block px-0 sm:px-4 py-2 sm:py-1.5 text-center border-b-0 sm:border-b-2 text-purple-400 transition duration-300 ease-out hover:text-blue-400 hover:border-purple-400" href="#">
                  <i className="far fa-folders"></i> พากย์ไทย      
              </Link>
            </li>
            <li>
              <Link className="block px-0 sm:px-4 py-2 sm:py-1.5 text-center border-b-0 sm:border-b-2 text-purple-400 transition duration-300 ease-out hover:text-blue-400 hover:border-purple-400" href="/subthai">
                  <i className="far fa-folders"></i> ซับไทย      
              </Link>
            </li>
            <li>
              <Link className="block px-0 sm:px-4 py-2 sm:py-1.5 text-center border-b-0 sm:border-b-2 text-purple-400 transition duration-300 ease-out hover:text-blue-400 hover:border-purple-400" href="#">
                  <i className="far fa-folders"></i> เดอะมูฟวี่      
              </Link>
            </li>
            <li>
              <Link className="block py-2 pr-4 pl-3 text-slate-50 bg-purple-400 rounded-md transition ease-out duration-300 hover:bg-purple-200 hover:text-purple-500" href="/auth/login">
                  <i className="far fa-sign-in"></i> เข้าสู่ระบบ
              </Link>
            </li>
          </ul>
        </div>

        {/* มือถือ */}
        <div className="collapse navbar-collapse block sm:block w-full sm:w-auto" id="navigation-button">
          <ul className="flex flex-col space-x-0 sm:flex-row md:space-x-4 lg:space-x-8">
            <li>
              <Link className="block py-2.5 px-4 rounded-md sm:rounded-none sm:py-0 sm:px-0 duration-300 hover:translate-x-1 hover:bg-purple-50" href="#">
                  <i className="fas fa-house-day"></i> Commands
              </Link>
            </li>
            <li>
              <Link  className="block py-2.5 px-4 rounded-md sm:rounded-none sm:py-0 sm:px-0 duration-300 hover:translate-x-1 hover:bg-purple-50" href="#">
                  <i className="fas fa-house-day"></i> Commands
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nevbar;
