import { MenuItem } from "@/types/app";
import Link from "next/link";
import { FC } from "react";

type MenuProps = {
    items: Array<MenuItem>
}

export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <ul className="flex gap-4 items-center">
      {!items?.length && <span>Não tem items</span>}
      {items?.map((item) => (
        <Link
          key={item.label.toLowerCase().replaceAll(" ", "-")}
          className="bg-white text-black p-2 rounded-lg hover:bg-secondary-200 hover:text-primary-700"
          href={item.link}
        >
          {item.label}
        </Link>
      ))}
    </ul>
  );
};
