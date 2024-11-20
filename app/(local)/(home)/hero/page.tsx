import CustomButton from "@/app/components/button/custom-button";
import Image from "next/image";



export default function Hero(){
    return(
    <section className="  container flex xl:flex-row flex-col items-center  relative z-0  sm:mt-[4rem] xl:mt-[2rem] mt-[5rem]  ">
        <div className=" flex-1  ">
            <h1 className=" sm:text-7xl  text-4xl font-extrabold">Book your car with us to enjoy convenient transactions</h1>
            <p className="text-lg sm:text-2xl text-gray-500 font-light mt-5">Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton
                id="/"
                    title='Explore Cars'
                    style=" bg-primary-blue ease-linear rounded-full text-white mt-10 hover:bg-white hover:text-primary-blue duration-300 font-bold w-fit"
                    />
        </div>
        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen    ">
            <div className="relative xl:w-full sm:w-[90%] xl:h-full sm:h-[20rem] w-[40rem] z-0 flex justify-center ">
                <Image  className=" object-contain w-full h-full  " src={'/getImage.webp'} alt="ArbeCar"  fill priority />
            </div>
                <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4  bg-hero-bg bg-repeat-round   -z-10 w-full xl:h-screen h-[36.875rem]  overflow-hidden  hidden sm:block "></div>
        </div>
    </section>)
}