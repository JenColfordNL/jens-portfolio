// import React, { useEffect } from "react";
import Link from "next/link";
// import { Link, useLocation } from "react-router-dom";
import Navstyles from "../styles/Navbar.module.css";
//import ReorderIcon from "@mui/icons-material/Reorder";
// import { useState } from "react";

function Navbar() {
  //   const [expandNavbar, setExpandNavbar] = useState(false);

  //   const location = useLocation();

  //   useEffect(() => {
  //     setExpandNavbar(false);
  //   }, [location]);

  return (
    // <div className="navbar" id={expandNavbar ? "open" : "close"}>
    //   <div className="toggleButton">
    //     <button
    //       id="reorder-icon"
    //       onClick={() => {
    //         setExpandNavbar((prev) => !prev);
    //       }}
    //     >
    //       <ReorderIcon />
    //     </button>
    //</div>
    <div className={Navstyles.navbar}>
      <nav>
        <ul className={Navstyles.list}>
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/projects"> Passion Project </Link>
          </li>
          <li>
            <Link href="/experience"> Experience </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
