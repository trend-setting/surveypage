import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-secondary w-full mt-1">
      <div className="mx-auto px-4 md:px-8">
        <div className="mt-4 py-5 border-t border-accent flex items-center justify-between sm:flex-row flex-col">
          <p className="text-primary">
            © 2024 PMSA Kattilangadi. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-primary mt-3 sm:mt-0">
            <a
              href="https://www.instagram.com/wafypmsa_official/"
              className="hover:text-muted transition duration-150"
            >
              <BsInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/pmsawafy"
              className="hover:text-muted transition duration-150"
            >
              <BsFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@munthajulafnanstudentsasso6980"
              className="hover:text-muted transition duration-150"
            >
              <BsYoutube size={24} />
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb2AqUCIyPtPC9Tedu3m"
              className="hover:text-muted transition duration-150"
            >
              <BsWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    // <div className="pt-3 pb-2 w-[98dvw] flex flex-col justify-center items-center mt-1  relative z-20 rounded-tr-2xl rounded-tl-2xl shadow-lg bg-secondary shadow-slate-700/5  lg:backdrop-blur-sm lg:after:hidden">
    //   <div className="p-2 md:p-5 text-balance">
    //     Munthajul Afnan Students' Assosciation
    //     <div className="flex columns-1">
    //       <FaLocationDot size={20} className="mr-2" />
    //       PMSA Wafy College Kattilangadi
    //     </div>
    //     <br />
    //     <div className="flex columns-1">
    //       <a
    //         href="https://www.instagram.com/wafypmsa_official/"
    //         target="_blank"
    //         className=" flex columns-1"
    //       >
    //         <FaInstagram size={20} className="mr-2" />
    //         wafypmsa_official
    //       </a>
    //     </div>
    //     <div className="flex columns-1">
    //       <a
    //         href="https://youtube.com/@munthajulafnanstudentsasso6980?si=x3m_nrILHgMRXz9s"
    //         target="_blank"
    //         className=" flex columns-1"
    //       >
    //         <FaYoutube size={20} className="mr-2" />
    //         Munthajul Afnan Students' Assosciation MASA
    //       </a>
    //     </div>
    //     <div className="flex columns-1">
    //       <a
    //         href="https://www.facebook.com/pmsawafy"
    //         target="_blank"
    //         className=" flex columns-1"
    //       >
    //         <FaFacebook size={20} className="mr-2" />
    //         Pmsa Wafy
    //       </a>
    //     </div>
    //   </div>
    //   <div className="p-2 md:p-5 text-balance w-full flex justify-center">
    //     Developed By{" "}
    //     <span className="ml-1 mr-1 font-bold">
    //       <a href="https://mohdshuhaib.github.io/shuhaibcv/" target="_blank">
    //         Shuhaib
    //       </a>{" "}
    //     </span>
    //     |{" "}
    //     <span className="ml-1 font-bold">
    //       <a href="https://mskccv.vercel.app/" target="_blank">
    //         m_Salih_Kc
    //       </a>
    //     </span>
    //     <br className="h-4"></br>
    //   </div>
    // </div>
  );
}
