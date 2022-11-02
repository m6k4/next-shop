import Image from "next/image"

const Header = () => {
  return (
    <div className=" bg-stone-200">
      <div className="flex flex-row justify-between h-full items-center">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-gray-800 uppercase">Plantarium</h1>
          <p className="text-xl font-thin text-gray-600">A place to share your plants</p>
        </div>
        <div className="justify-center pt-8 invisible sm:visible">
          <Image src="/monstera.jpg" alt="logo" width={450} height={350} priority/>
        </div>
      </div>
    </div>
  );
}

export default Header;