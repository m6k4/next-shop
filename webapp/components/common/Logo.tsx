import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex flex-col justify-center text-center">
     <Image src="/logo.png" alt="logo" width={100} height={100} />
     <p className="text-xl font-thin text-gray-600 uppercase">Plantarium</p>
    </div>
  );
}

export default Logo;