import React, { useEffect } from "react";
import Logo from "../../../components/Logo";
import ThemeDropdown from "../../../components/themeToggle";
import Button from "../../../components/Button";
import { IoMdMenu, IoMdContacts } from "react-icons/io";
import { Link,useLocation } from "react-router";
import { FaHome, FaBlog, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { useAppSelector } from "../../../store/hook";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const location = useLocation();
  const {user}=useAppSelector(state=>state.login)

  // dışarıya tıklayınca sidebar kapansın
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // scroll kilitle
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const navItems = [
    { to: "/admin/", label: "Home", icon: <FaHome /> },
    { to: "/admin/blog", label: "Blog", icon: <FaBlog /> },
    { to: "/admin/contacts", label: "Contacts", icon: <IoMdContacts /> },
    { to: "/admin/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/admin/users", label: "Users", icon: <FaUsers /> },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white dark:bg-zinc-800 shadow-sm z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Sol - Menü + Logo */}
          <div className="flex items-center gap-x-2">
            <IoMdMenu
              size={30}
              onClick={() => setOpen(!open)}
              className="cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md p-1 transition-colors"
            />
            <Logo />
          </div>

          {/* Sağ - Aksiyonlar */}
          <div className="flex items-center gap-x-3">
             {user ? (
              <Link to={"/admin/profile"} className="hidden md:flex items-center">
                  <Button size="sm" className="w-full">
                    {user.name}
                  </Button>
                </Link>
             ): (
              <Link to={"/login"} className="hidden md:flex items-center">
                  <Button size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
             )}
            <ThemeDropdown />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-100 dark:bg-zinc-900 shadow-lg border-r border-zinc-200 dark:border-zinc-700 transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-between h-full py-6">
          {/* Logo */}
          <div className="border-b w-full flex items-center justify-center p-2 border-zinc-400 dark:border-zinc-600">
            <Logo />
          </div>

          {/* Nav links */}
          <nav className="mt-8 flex flex-col gap-y-2 text-gray-800 dark:text-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-x-2 w-4/5 mx-auto py-2 px-3 rounded-md font-medium transition-colors
                  ${
                    location.pathname === item.to
                      ? "bg-blue-600 text-white"
                      : "hover:bg-zinc-300 dark:hover:bg-zinc-700"
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Alt - Login */}
          <div className="mt-auto border-t w-full border-zinc-300 dark:border-zinc-700 pt-4 flex justify-center">
           {user ? (
              <Link to={"/admin/profile"} className="hidden md:flex items-center">
                  <Button size="sm" className="w-full">
                    {user.name}
                  </Button>
                </Link>
             ): (
              <Link to={"/login"} className="hidden md:flex items-center">
                  <Button size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
             )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
