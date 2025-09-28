import { useState } from "react";
import Button from "../../components/Button";

export default function TopSidebar({menu}:{menu:string[]}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 md:hidden  ">
      {/* Aç/Kapa Butonu */}
      <Button
        variant="primary"
        size="sm"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menü
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-white dark:bg-zinc-800 shadow-lg 
                    transform transition-transform duration-300 z-40
                    ${open ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="p-6 flex flex-col gap-4 relative">
          <span className="absolute right-4 top-4" onClick={()=>setOpen(false)}>
            X
          </span>
          
          {menu.map((item,i)=>(
            <Button key={i} variant="outline" size="md">
            {item}
          </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
