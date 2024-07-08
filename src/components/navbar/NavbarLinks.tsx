export interface NavLink {
  id: number;
  title: string;
  url: string;
}

export const links: NavLink[] = [
  {
    id: 1,
    title: "Statistika",
    url: "/#stats",
  },
  {
    id: 2,
    title: "Karakteristike",
    url: "/#features",
  },
  {
    id: 3,
    title: "O nama",
    url: "/#about",
  },
  {
    id: 4,
    title: "Roba",
    url: "/#industries",
  },
  {
    id: 5,
    title: "Kontakt",
    url: "/#contact",
  },
  {
    id: 6,
    title: "Info",
    url: "/#contact",
  },
  {
    id: 7,
    title: "Zahtev za upit",
    url: "/request",
  },
];
