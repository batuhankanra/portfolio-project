import { Link } from 'react-router';
import ThemeDropdown from '../../components/themeToggle';
import SideBar from './sidebar';
import Logo from '../../components/Logo';

const Header = () => {
  const menu=["home","about","buttons"]
  return (
    <header className=" dark:text-white p-4  shadow-lg transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Adı */}
        <Logo />
        
        {/* Navigasyon Linkleri */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menu.map((item,i)=>(
              <li key={i}>
              <Link 
                to="/" 
                className="font-medium  hover:text-blue-300 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
            ))}
            
          </ul>
          
          <div className="ml-4">
            <ThemeDropdown />
          </div>
        </div>
        
        <SideBar menu={menu} />
      </nav>
    </header>
  );
};

export default Header;