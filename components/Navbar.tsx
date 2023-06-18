import Image from "next/image";
import logo from "@/public/assets";

const Navbar = () => {
  return (
    <div className="w-full bg-tertiary shadow-navbarShadow h-20 flex flex-row items-center justify-center sticky top-0 z-50">
      <Image src={logo} alt="logo" className='w-20 mdl:w-24 mr-4' />
      <p className="text-xl md:text-2xl text-primary font-bold tracking-wide font-titleFont cursor-pointer">
        ImageGENIE
      </p>
    </div>
  );
};

export default Navbar;
