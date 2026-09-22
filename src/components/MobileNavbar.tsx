import React from 'react';
import { Home, Mail, Calendar, Camera, Sparkles } from 'lucide-react';

interface MobileNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero-section', label: 'Cover', icon: Home },
    { id: 'invitation-section', label: 'Invite', icon: Mail },
    { id: 'details-section', label: 'Details', icon: Calendar },
    { id: 'wish-section', label: 'Wish', icon: Sparkles },
    { id: 'gallery-section', label: 'Photos', icon: Camera },
  ];

  return (
    <nav
      id="bottom-mobile-nav"
      aria-label="Mobile Navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md bg-white/95 backdrop-blur-md rounded-full px-2 py-1.5 shadow-xl border-2 border-pink-100 flex items-center justify-around"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            id={`nav-tab-${item.id}`}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all cursor-pointer min-h-[44px] ${
              isActive
                ? 'bg-pink-500 text-white font-bold shadow-xs scale-105'
                : 'text-slate-500 hover:text-pink-600 active:scale-95'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
            <span className="text-[10px] font-display whitespace-nowrap mt-0.5">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
