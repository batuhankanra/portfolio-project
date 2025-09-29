import { useState, useRef, useEffect } from "react";
import { setTheme } from "../store/features/themes";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hook";
import type { Theme } from "../types";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const themes: { value: Theme; label: string,icon:any }[] = [
  { value: "dark", label: "Dark" ,icon:FaMoon },
  { value: "light", label: "Light",icon:IoSunnySharp },
  { value: "system", label: "System",icon:HiMiniComputerDesktop },
];

export default function ThemeDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  // dışarıya tıklayınca menüyü kapatma
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Ana buton */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen((prev) => !prev)}
      >
        {themes.find((t) => t.value === theme)?.label}
      </Button>

      {/* Dropdown Menü */}
      <div
        className={`absolute left-0 mt-2 w-40 rounded-xl text-black font-medium dark:text-white overflow-hidden shadow-2xl
                    bg-white dark:bg-gray-800 
                    transform transition-all duration-200 z-10
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <ul className="flex flex-col">
          {themes.map((item) => (
            <li key={item.value}>
              <button
                onClick={() => {
                  dispatch(setTheme(item.value));
                  setOpen(false);
                }}
                className={`w-full px-4 py-2 text-sm  text-left transition-colors cursor-pointer flex items-center gap-x-2
                  ${
                    theme === item.value
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                <item.icon />{item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
