import React from "react";
import Link from "next/link";
import Image from "next/image";
function Navbar(props){
    return (
      <nav className="bg-white shadow-2xl py-4 px-6 flex justify-between items-center navbar">
        <div className="text-1xl font-bold">
          <Link href="/">Interview.ai</Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 mr-8 " >{props.company}</span>
        
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Hello <span className="font-bold ">{props.user_name}</span></span>
            
            <Image src="/user_icon.png" alt="Profile" width={25} height={25} className="rounded-full" />
            

          </div>
          <div className="mr-8 cursor-pointer">
          <Image src="/logout.png" alt="Logout Icon " width={25} height={25}/>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;