import { ChefHatIcon } from "lucide-react";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 justify-center">
      <ChefHatIcon className="w-6 h-6 text-orange-500" />
      <h4 className="text-md font-semibold text-orange-500">Yummy Foodie</h4>
    </Link>
  );
};
