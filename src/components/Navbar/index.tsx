import Image from "next/image";
import { FC } from "react";
import { Menu } from "./Menu";
import { MenuItem } from "@/types/app";
import { Profiler } from "./Profiler";

export const Navbar: FC = () => {
  const menuItems: Array<MenuItem> = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Posts",
      link: "/posts",
    },
    {
      label: "Linux",
      link: "/posts/linux",
    },
    {
      label: "About",
      link: "/about",
    },
  ];

  return (
    <nav className="bg-primary-900 text-white flex justify-between items-center px-8 py-4">
      <Image
        width={40}
        height={40}
        alt="Logo do spartan"
        src="/logo.jpg"
        className="rounded-full"
      />
      <Menu items={menuItems} />
      <Profiler />
    </nav>
  );
};
