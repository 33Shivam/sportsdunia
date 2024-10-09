import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconMessage, IconUser, IconHome } from "@tabler/icons-react";

type Props = {};
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
const header = (props: Props) => {
  return (
    <div className=" h-full w-full text-neutral-500 dark:text-neutral-300 ">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default header;
