export interface NavLink {
  id: number;
  title: string;
  url: string;
}

export const links: NavLink[] = [
  {
    id: 1,
    title: "Početna",
    url: "/#hero",
  },
  {
    id: 2,
    title: "Statistika",
    url: "/#stats",
  },
  {
    id: 3,
    title: "O nama",
    url: "/#about",
  },
  {
    id: 4,
    title: "Kontakt",
    url: "/#contact",
  },
  {
    id: 5,
    title: "Info",
    url: "/#contact",
  },
  {
    id: 6,
    title: "Zahtev za upit",
    url: "/request",
  },
];
