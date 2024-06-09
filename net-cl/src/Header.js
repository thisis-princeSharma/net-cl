import React, { useEffect, useState } from "react";
import "./Header.css";


function Header() {
  const [show, handleShow] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true)
      }
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);
  return (
    <div className={`nav ${show &&"nav_black"}`}>
      <img
        className="nav_logo"
        src="https://ik.imagekit.io/Prince/Logonetflix.png?updatedAt=1717895518034"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://ik.imagekit.io/Prince/Netflix-avatar.png?updatedAt=1717895873305"
        alt="Netflix smily avatar"
      />
    </div>
  );
}

export default Header;
