
import React from "react";
import Link from "../Link/Link";


const NavBar = () => {
  const routes = [
    { path: "/home", name: "Home", id: 1 },
    { path: "/about", name: "About Us", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/profile", name: "User Profile", id: 5 },
  ];
 
  return (
    <nav>
        <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
               
            }
    
      </ul>
    </nav>
  );
};

export default NavBar;
