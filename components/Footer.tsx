import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pt-3 pb-2 w-[98dvw] flex flex-col justify-center items-center mt-1  relative z-20 rounded-tr-2xl rounded-tl-2xl shadow-lg bg-neutral-700 shadow-slate-700/5  lg:backdrop-blur-sm lg:after:hidden">
      <div className="p-2 md:p-5 text-balance">
        Munthajul Afnan Students' Assosciation
        <div className="flex columns-1">
          <FaLocationDot size={20} className="mr-2" />
          PMSA Wafy College Kattilangadi
        </div>
        <br />
        <div className="flex columns-1">
          <a
            href="https://www.instagram.com/wafypmsa_official/"
            target="_blank"
            className=" flex columns-1"
          >
            <FaInstagram size={20} className="mr-2" />
            wafypmsa_official
          </a>
        </div>
        <div className="flex columns-1">
          <a
            href="https://youtube.com/@munthajulafnanstudentsasso6980?si=x3m_nrILHgMRXz9s"
            target="_blank"
            className=" flex columns-1"
          >
            <FaYoutube size={20} className="mr-2" />
            Munthajul Afnan Students' Assosciation MASA
          </a>
        </div>
        <div className="flex columns-1">
          <a
            href="https://www.facebook.com/pmsawafy"
            target="_blank"
            className=" flex columns-1"
          >
            <FaFacebook size={20} className="mr-2" />
            Pmsa Wafy
          </a>
        </div>
      </div>
      <div className="p-2 md:p-5 text-balance w-full flex justify-center">
        Developed By{" "}
        <span className="ml-1 mr-1 font-bold">
          <a href="https://mohdshuhaib.github.io/shuhaibcv/" target="_blank">
            Shuhaib
          </a>{" "}
        </span>
        |{" "}
        <span className="ml-1 font-bold">
          <a href="https://mskccv.vercel.app/" target="_blank">
            m_Salih_Kc
          </a>
        </span>
        <br className="h-4"></br>
      </div>
    </div>
  );
}
