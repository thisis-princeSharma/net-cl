import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
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
