import Link from "next/link";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

export function CustomLink({ href, title, className }: CustomLinkProps) {
  return (
    <Link
      className={`uppercase px-4 py-2 hover:text-blue-400 hover:underline ${className}`}
      href={href}
    >
      {title}
    </Link>
  );
}
