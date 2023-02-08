import React from "react";
import Head from "next/head";
import Image from "next/image";
import LayoutBackground from "../../../public/images/bg-auth.jpg"

interface Props {
  children: React.ReactElement;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`pt-24 pb-6 pl-24 pr-6 min-h-screen bg-white grid grid-flow-col-dense grid-cols-3`}
      >
        <div className="border-t border-r border-b border-gray-200 border-solid ">{children}</div>
        <div className="col-span-2">
          <Image
            src={LayoutBackground}
            alt="Layout Background"
            className="object-cover w-full  h-full"
          />
        </div>
      </main>
    </div>
  );
};

export default Layout;
