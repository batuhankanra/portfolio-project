import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ThemeDropdown from '../../components/themeToggle';
import SideBar from './sidebar';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const Header = () => {
  const menu = ["Blog", "Contacts", "Projects"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sayfa 50px'den fazla kaydırıldığında arka planı değiştir
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Scroll olayını dinle
    window.addEventListener('scroll', handleScroll);
    
    // Component unmount olduğunda event listener'ı temizle
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`dark:text-white  p-4 backdrop-blur-2xl shadow-lg transition-all duration-300 fixed top-0 w-full z-40 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg' 
        : 'bg-transparent shadow-none'
    }`}>
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menu.map((item, i) => (
              <li key={i}>
                <Link 
                  to="/" 
                  className={`font-medium transition-colors duration-200 ${
                    scrolled 
                      ? 'text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                      : ' hover:text-blue-300 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="ml-4">
            <ThemeDropdown />
          </div>
          <div>
            <Link to={"/admin/login"} className="hidden md:flex items-center">
                  <Button size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
          </div>
        </div>
        
        <SideBar menu={menu} />
      </nav>
    </header>
  );
};

export default Header;