import { FormattedMessage } from "react-intl";

export interface NavLink {
  id: number;
  title: any;
  url: string;
}

export const links: NavLink[] = [
  {
    id: 1,
    title: <FormattedMessage id="nav1" />,
    url: "/#features",
  },
  {
    id: 2,
    title: <FormattedMessage id="nav2" />,
    url: "/#about",
  },
  {
    id: 3,
    title: <FormattedMessage id="nav3" />,
    url: "/#industries",
  },
  {
    id: 4,
    title: <FormattedMessage id="nav4" />,
    url: "/#contact",
  },
  {
    id: 5,
    title: <FormattedMessage id="nav5" />,
    url: "/#contact",
  },
  {
    id: 6,
    title: <FormattedMessage id="nav6" />,
    url: "/request",
  },
];
