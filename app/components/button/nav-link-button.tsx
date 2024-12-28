import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
};

const NavLinkButton = ({
  href,
  children,
  className = '',
  'aria-label': ariaLabel,
}: NavLinkProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    className={`relative m-1 flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200 ${className}`}
  >
    {children}
  </Link>
);

export default NavLinkButton;
