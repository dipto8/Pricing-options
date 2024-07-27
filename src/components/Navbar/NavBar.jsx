
import React, { useState } from "react";
import Link from "../Link/Link";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";


const NavBar = () => {
  const routes = [
    { path: "/home", name: "Home", id: 1 },
    { path: "/about", name: "About Us", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/profile", name: "User Profile", id: 5 },
  ];

  const [open,setOpen] =useState(false)

 
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={()=> setOpen( !open)}>
     
   {
     open === true ? <RiCloseLargeLine className="" />
     :  <TfiLayoutGrid4Alt   className=" " />
   }
      </div>
      
        <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
               
            }
    
      </ul>
    </nav>
  );
};

export default NavBar;
