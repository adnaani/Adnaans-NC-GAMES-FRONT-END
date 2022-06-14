import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <MdIcons.MdRateReview />,
    cName: "nav-text",
  },
  {
    title: "Category",
    path: "/category",
    icon: <MdIcons.MdCategory />,
    cName: "nav-text",
  },
  {
    title: "About-us",
    path: "/about us",
    icon: <AiIcons.AiFillQuestionCircle />,
    cName: "nav-text",
  },
];
