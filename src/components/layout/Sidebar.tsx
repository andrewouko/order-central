import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { CheckboxProps, Route, TextInputProps } from "@/types";
import TextInput from "@/components/form/TextInput";
import Checkbox from "@/components/form/Checkbox";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaRegUserCircle,
  FaSearch,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Button from "@/components/form/Button";
import Link from "next/link";
import AEDTLogo from "../../../public/images/AEDT-logo.png";
import PlaceHolderLogo from "../../../public/images/logo.png";
import { BiHomeAlt, BiCabinet } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { RxCaretRight } from "react-icons/rx";

const routes: Route[] = [
  {
    path: "/",
    label: "Search",
    Icon: FaSearch,
  },
  {
    path: "/",
    label: "Item 2",
    Icon: BiCabinet,
  },
  {
    path: "/",
    label: "Item 3",
    Icon: FaRegUserCircle,
  },
];

interface NavItem extends Route {
  isActive: boolean;
}

const NavItem = ({ path, label, Icon, isActive }: NavItem) => {
  const className = isActive
    ? "text-gray-100"
    : "text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100";
  return (
    <>
      <div
        className={`${className} flex items-center px-6 py-2 mt-4 duration-200`}
        key={path}
      >
        <div className="w-full flex justify-between">
          <Link href={path} className="flex items-center space-x-2">
            <Icon />
            <span className="">{label}</span>
          </Link>
          <RxCaretRight
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
          />
        </div>
      </div>
    </>
  );
};

export default function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="flex">
        <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-800 lg:translate-x-0 lg:static lg:inset-0">
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <Image
                src={PlaceHolderLogo}
                alt="AEDT Logo"
                className="object-cover w-full h-full px-10"
              />
            </div>
          </div>
          <nav className="mt-10">
            <div className="border-solid border-b-2 border-gray-400 pb-6">
              {routes.map((route) => {
                const item = {
                  ...route,
                  isActive: router.pathname === route.path,
                };
                return NavItem(item);
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
