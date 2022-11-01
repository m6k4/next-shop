import Image from "next/image"
import { RiPlantLine } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <RiPlantLine className="text-5xl w-full text-center" />
      <p className="text-xl font-thin text-gray-600 uppercase">Plantarium</p>
    </div>
  );
}

export default Logo;