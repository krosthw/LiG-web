import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import { Category } from "@/types";
import NavBarActions from "@/components/navbar-actions";


const NavBar = async () => {
  //const categories = await getCategories();

  const categories:Category[] = [{id: "1", name: "Libri", billboard: null}, {id: "1", name: "Scatoloni", billboard: null}];

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Libreriamo i Garages</p>
          </Link>
        <MainNav data={categories}/>
        <NavBarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default NavBar;