import React from "react";


const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <header className=" mb-1 relative z-20 w-full shadow-lg bg-secondary shadow-slate-700/5  lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex md:h-[5.5rem] h-[3.5rem] items-stretch justify-between font-medium text-white"
            role="navigation"
          >
            <a
              className="font-Anek lg:text-[1.5rem] flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
              href="#"
            >
              ഞാൻ കണ്ട ഇസ്ലാം
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
