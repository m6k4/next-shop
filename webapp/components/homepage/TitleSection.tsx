import Image from "next/image"

const Header = () => {
  return (
    <div className=" bg-stone-200">
      <div className="flex flex-row justify-between h-full p-4 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 uppercase">Plantarium</h1>
          <p className="text-xl font-thin text-gray-600">A place to share your plants</p>
        </div>
        <div className="flex justify-center p-4">
          <Image src="/monstera.jpg" alt="logo" width={450} height={350} />
        </div>
      </div>
    </div>
  );
}

export default Header;