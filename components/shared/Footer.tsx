import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t flex justify-center items-center">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo-cust.svg"}
            alt="logo"
            width={100}
            height={30}
          />
        </Link>
        <p className="text-xs">2024 Happenize. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
