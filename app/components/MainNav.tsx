"use client";

import { usePathname } from "next/navigation";
import { CustomLink } from "./CustomLink";

const links: { href: string; title: string }[] = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/users", title: "Users" },
  { href: "/about", title: "About" },
];

export function MainNav() {
  const path = usePathname();

  return (
    <nav className="flex gap-2 bg-slate-700">
      {links.map(({ href, title }) => {
        const isActive =
          path === href || (path.startsWith(href) && href !== "/");
        const className = isActive ? "text-blue-500 underline" : "";

        return (
          <CustomLink
            key={title}
            className={className}
            href={href}
            title={title}
          />
        );
      })}
    </nav>
  );
}
