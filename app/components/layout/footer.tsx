import Link from "next/link";
import { footerLinks } from "../../context/Context";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="  container  border-t border-gray-100 flex flex-col text-black-100 mt-5  sm-w-full bottom-0">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 w-full ">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="">
            <h1 className="font-bold text-xl flex items-center ">
              <div className="max-w-[3.75rem]  ">
              <Image className=" w-full h-full " src="/2.png" alt=".."  width={300} height={300} priority/>
              </div>
              ArbeCar
            </h1>
            <div className=" text-base text-gray-700">
              ArbeCar 2024
              <br />
              <span className=" capitalize ">CB:abdalrhman albari</span>
              <br />
              All rights reversed &copy;
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link: any) => (
            <div
              key={link.title}
              className=" flex flex-col gap-6 text-base min-w-[10.625rem]"
            >
              <h3 className=" font-bold">{link.title}</h3>
              {link.links.map((item: any) => (
                <Link href={item.url} className=" text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 ArbeCar. All Rights Reversed </p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href={"/"} className=" text-gray-500">
            {" "}
            Privacy Policy
          </Link>
          <Link href={"/"} className=" text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
