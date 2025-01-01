import React from "react";


const Header: React.FC = () => {
  return (
    <div className="w-[98dvw] flex flex-col justify-center items-center">
      <header className=" m-1 relative z-20 w-full rounded-2xl shadow-lg bg-white/90 shadow-slate-700/5  lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex md:h-[5.5rem] h-[3.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <a
              className="font-Anek lg:text-[1.5rem] flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
              href="#"
            >
              ഇസ്ലാം; ലളിതം, സുന്ദരം
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
