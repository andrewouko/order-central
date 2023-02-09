import Layout from "@/components/layout/Layout";
import AEDTLogo from "../../public/images/AEDT-logo.png";
import Image from "next/image";
import { CheckboxProps, DashboardProps, TextInputProps } from "@/types";
import TextInput from "@/components/form/TextInput";
import Checkbox from "@/components/form/Checkbox";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Button from "@/components/form/Button";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }: DashboardProps) {
  return (
    <>
      <div className="flex h-screen bg-gray-200 font-roboto">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container pl-4 py-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
