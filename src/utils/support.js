import { MdHome, MdLibraryMusic, MdMusicNote } from "react-icons/md";

export const menuItems = [
  {
    id: 1,
    icon: <MdHome className="text-2xl text-textcolor" />,
    name: "Home",
    uri: "/home",
  },

  {
    id: 2,
    icon: <MdLibraryMusic className="text-2xl text-textcolor" />,
    name: "Library",
    uri: "/library",
  },

  {
    id: 3,
    icon: <MdMusicNote className="text-2xl text-textcolor" />,
    name: "Playlist",
    uri: "/playlist",
  },
];
