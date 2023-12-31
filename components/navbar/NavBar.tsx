import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";

const navItems = [
    { path:"about", text: 'About' },
    { path:"pricing", text: 'Pricing' },
    { path:"contact", text: 'Contact' },
]

export const NavBar = async () => {
 
  return (
    <div className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"/>
        <span>home</span>
      </Link>
      <div className="flex flex-1 justify-end">
        {navItems.map( item => (
                    <ActiveLink 
                        key={item.path} 
                        path={item.path} 
                        text={item.path} />
                )
            )}
      
      </div>
    </div>
  );
}

export default NavBar;
