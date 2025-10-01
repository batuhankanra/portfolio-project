import React from 'react';
import { Link } from 'react-router';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Hızlı Linkler",
      links: [
        { name: "Ana Sayfa", path: "/" },
        { name: "Hakkımda", path: "/about" },
        { name: "Projeler", path: "/projects" },
        { name: "İletişim", path: "/contact" },
      ]
    },
    {
      title: "Teknolojiler",
      links: [
        { name: "React", path: "#" },
        { name: "Next.js", path: "#" },
        { name: "TypeScript", path: "#" },
        { name: "Tailwind CSS", path: "#" },
      ]
    },
    {
      title: "İletişim",
      links: [
        { name: "batuhan_kanra_60@hotmail.com", path: "mailto:batuhan_kanra_60@hotmail.com" },
        { name: "Muğla/Milas, Türkiye"},
      ]
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/batuhankanra", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/batuhankanra", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/batuhankanra", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com/batuhankanra", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">BK</span>
              </div>
              <h2 className="text-2xl font-bold">Batuhan Kanra</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Modern web teknolojileriyle full-stack uygulamalar geliştiren bir yazılım geliştiriciyim.
            </p>
            
            {/* Sosyal Medya Linkleri */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Kategorileri */}
          {footerLinks.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <span
                      
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Batuhan Kanra. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Gizlilik Politikası
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;