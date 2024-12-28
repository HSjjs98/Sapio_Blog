import { List, Search, Tag, type LucideIcon } from 'lucide-react';

import NavLinkButton from './button/nav-link-button';
import ThemeToggleButton from './button/theme-toggle-button';

const IconComponent: Record<string, LucideIcon> = {
  Tag,
  List,
  Search,
} as const;

const iconLinks = [
  {
    path: '/tag',
    icon: 'Tag',
    ariaLabel: 'Tags',
  },
  {
    path: '/list',
    icon: 'List',
    ariaLabel: 'List',
  },
  {
    path: '/search',
    icon: 'Search',
    ariaLabel: 'Search',
  },
] as const;

export function Navbar() {
  return (
    <aside className="-ml-2 mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-center justify-between bg-white px-12 py-2 shadow-sm md:overflow-auto dark:bg-black dark:text-white dark:shadow-white"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <NavLinkButton
              href="/"
              className="font-space-grotesk text-3xl font-bold"
            >
              zero.blog
            </NavLinkButton>
          </div>

          <div className="ml-4 flex items-center gap-1">
            <ThemeToggleButton />
            {iconLinks.map(({ path, icon, ariaLabel }) => {
              const Icon = IconComponent[icon as keyof typeof IconComponent];
              return (
                <NavLinkButton
                  key={path}
                  href={path}
                  className="transition hover:scale-110"
                  aria-label={ariaLabel}
                >
                  <Icon size={24} />
                </NavLinkButton>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
