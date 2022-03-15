import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchor = links.map((link) => { 
  return(
    <a href={"#"+link} key={link}> {link} </a> 
  )
  })
  
  return (
    <nav>{anchor}</nav>
  )
};

export default NavBar;
