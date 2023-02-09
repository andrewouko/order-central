import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Socials = () => (
  <div className="flex flex-row items-center place-content-center space-x-2">
    <div className="border-solid border-2 border-blue-600 rounded-full p-2 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer">
      <FaFacebook className="text-blue-600 " />
    </div>
    <div className="border-solid border-2 border-red-600 rounded-full p-2 hover:bg-red-700 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer">
      <FaGoogle className="text-red-600" />
    </div>
    <div className="border-solid border-2 border-sky-600 rounded-full p-2 hover:bg-sky-700 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer">
      <FaTwitter className="text-sky-600" />
    </div>
    <div className="border-solid border-2 border-zinc-600 rounded-full p-2 hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-900 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer">
      <FaGithub className="text-zinc-600" />
    </div>
  </div>
);
export default Socials;
