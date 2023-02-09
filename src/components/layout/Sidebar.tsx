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

const routes: Route[] = [
  {
    path: "/analytics",
    label: "Dashboard",
    Icon: BiHomeAlt,
  },
  {
    path: "/courses",
    label: "Courses",
    Icon: BiCabinet,
  },
  {
    path: "/user",
    label: "User Management",
    Icon: FaRegUserCircle,
  },
  {
    path: "/subscription",
    label: "Subscriptions",
    Icon: BsShieldCheck,
  },
  {
    path: "/payments",
    label: "Payments",
    Icon: RiMoneyDollarBoxLine,
  },
];

interface NavItem extends Route {
  isActive: boolean;
}

const NavItem = ({ path, label, Icon, isActive }: NavItem) => {
    const className = isActive ? "flex items-center px-6 py-2 mt-4 duration-200 text-gray-100" : "flex items-center px-6 py-2 mt-4 duration-200 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100";
  return <Link
    href={path}
    className={className}
    key={path}
  >
    <Icon />
    <span className="mx-4">{label}</span>
  </Link>
};

export default function Sidebar() {
    const router = useRouter();
  return (
    <>
      <div className="flex">
        <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
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
            {routes.map(route => {
                const item = ({...route, isActive: router.pathname === route.path})
                return NavItem(item)
            })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
