
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Search } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavClick, className }) => {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavClick(sectionId);
  };

  return (
    <aside className={`fixed top-0 left-0 h-screen w-64 bg-black text-gray-400 flex flex-col z-50 ${className}`}>
      <div className="p-6">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-3 text-2xl font-bold text-white">
          <Search size={32} className="text-[#1DB954]" />
          Vordi
        </a>
      </div>
      <nav className="flex-grow px-4">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`flex items-center gap-4 px-4 py-2 my-1 rounded-md transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#1DB954]'
                    : 'text-white hover:text-white'
                }`}
              >
                <item.icon size={24} fill={activeSection === item.id ? 'currentColor' : 'none'} />
                <span className="font-bold">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-6 mt-auto">
        {/* Placeholder for future use */}
      </div>
    </aside>
  );
};

export default Sidebar;
