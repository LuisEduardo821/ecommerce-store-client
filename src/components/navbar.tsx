import Link from "next/link";
import { Container } from "./ui/container";
import { MainNav } from "./main-nav";
import { getCategories } from "@/actions/get-categories";

export const Navbar = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="border-b">
      <Container>
        <div className="flex px-4 sm:px-6 lg:px-8 h-16 items-center">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
};