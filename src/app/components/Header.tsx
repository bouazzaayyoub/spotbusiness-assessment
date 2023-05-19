import React from "react";
import Logo from "../assets/img/logo.svg";
import Image from "next/image";
import Link from "./shared/Link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="container mt-3 px-12">
        <div className="h-[1px] border-dark border" />
        <div className="flex justify-between before:bg-dark before:h-12">
          <div className="w-1/2 mt-2">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex text-dark w-1/2">
            <div className="h-3 border-r-2 border-dark " />
            <div className="w-1/4 flex flex-col space-y-2 px-4 text-sm font-medium mt-3">
              <Link text="Solutions" />
              <Link text="Locations" />
            </div>
            <div className="h-3 border-r-2 border-dark" />
            <div className="w-1/4 flex flex-col space-y-2 px-4 text-sm font-medium mt-3">
              <Link text="Contact us" />
              <Link text="Enterprise" />
            </div>
            <div className="h-3 border-r-2 border-dark" />

            <div className="w-1/2 flex flex-row items-start justify-between ps-4 text-dark mt-3">
              <button className="uppercase font-bold">Log in</button>
              <button className="uppercase font-bold">Book a visit</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
