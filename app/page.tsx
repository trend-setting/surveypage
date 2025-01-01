import Image from "next/image";
import Response from "./responce/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Response />
      <Footer />
    </div>
  );
}
