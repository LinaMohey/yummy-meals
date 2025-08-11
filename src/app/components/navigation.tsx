"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const baseLinkClasses =
    "hover:text-orange-400 transition-colors duration-200";

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm p-6 flex justify-between items-center">
      <Logo />
      <div className="flex gap-6 text-md font-medium text-gray-800">
        <Link
          href="/"
          className={`${baseLinkClasses} ${
            pathname === "/" ? "font-bold text-orange-500" : "text-gray-800"
          }`}
        >
          Home
        </Link>
        <Link
          href="/categories"
          className={`${baseLinkClasses} ${
            pathname === "/categories"
              ? "font-bold text-orange-500"
              : "text-gray-800"
          }`}
        >
          Categories
        </Link>
      </div>
    </div>
  );
};
