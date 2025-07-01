
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChartBar, Settings2 } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    {
      to: '/',
      icon: ChartBar,
      label: '대시보드',
      isActive: location.pathname === '/'
    },
    {
      to: '/settings',
      icon: Settings2,
      label: '설정',
      isActive: location.pathname === '/settings'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 z-50 transition-colors">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex flex-col items-center px-4 py-2 rounded-lg transition-colors",
                  item.isActive
                    ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                )}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
