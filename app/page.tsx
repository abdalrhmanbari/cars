import Image from "next/image";
import Hero from "./(local)/(home)/hero/page";
import Sales from "./(local)/(home)/sales/page";
import Rental from "./(local)/(home)/rental/page";
import Contact from "./(local)/(home)/contact/page";

export default async function Home() {
  return (
    <div className="  overflow-hidden">
      <Hero />
      <Rental />
      <Sales />
      <Contact/>
    </div>
  );
}
