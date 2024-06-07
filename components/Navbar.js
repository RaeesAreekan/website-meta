import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown} from "@fortawesome/free-solid-svg-icons";
function Navbar(props){
    return (
      <nav className="bg-white shadow-xl py-4 px-6 flex justify-between items-center navbar">
        <div className="text-1xl font-bold">
          <Link href="/">Interview.ai</Link>
        </div>
        <div className="flex items-center space-x-10 navcolor">
          <span className="text-gray-700 mr-8 " >{props.company}</span>
        
          <div className=" flex items-center space-x-3 ">
            <div className="dropdown"><FontAwesomeIcon icon={faCaretDown} className="fas fa-check" style={{ color: "black" }} />
            {/* <button className="dropbtn">
              <div className="dropdown-content">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </div>
            </button> */}
            </div>

            <span className="text-gray-700">Hello <span className="font-bold ">{props.user_name}</span></span>
            
            <Image src="/user_icon.png" alt="Profile" width={25} height={25} className="rounded-full" />
            

          </div>
          <div className="ml-8 cursor-pointer">
          <Image src="/logout.png" alt="Logout Icon " width={25} height={25}/>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;