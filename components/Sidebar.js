import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faInbox,faEnvelope,faCalendar,faHandshake} from "@fortawesome/free-solid-svg-icons";
const Sidebar=()=> {
  return (
    <>
    <aside className="py-2 flex flex-col space-y-5 mt-11 w-64 sidebar">
    <button className="py-1 px-8 hover:bg-green-500 hover:text-white rounded transition duration-200 btn flex items-center">
  <Link href="/dashboard" className='href'>
    <FontAwesomeIcon icon={faHouse} className="fas fa-check mr-5" style={{ color: "black" }} />
    <span className="text-center">Dashboard</span>
  </Link>
</button>
      
<button className="py-1 px-8 hover:bg-green-500 hover:text-white rounded transition duration-200 btn flex items-center ">
  <Link href="/dashboard" className='href'>
    <FontAwesomeIcon icon={faInbox} className="fas fa-check mr-5" style={{ color: "black" }} />
    <span className="text-center">Hiring</span>
  </Link>
</button>
<button className="py-1 px-8 hover:bg-green-500 hover:text-white rounded transition duration-200 btn flex items-center">
  <Link href="/dashboard"  className='href'>
    <FontAwesomeIcon icon={faHandshake} className="fas fa-check mr-5" style={{ color: "black" }} />
    <span className="text-center">Jobs</span>
  </Link>
</button>
     
     
     <button className="py-1 px-8 hover:bg-green-500 hover:text-white rounded transition duration-200 btn flex items-center">
  <Link href="/dashboard" className='href'>
    <FontAwesomeIcon icon={faEnvelope} className="fas fa-check mr-5" style={{ color: "black" }} />
    <span className="text-center">Messages</span>
  </Link>
</button>
      
<button className="py-1 px-8 hover:bg-green-500 hover:text-white rounded transition duration-200 btn flex items-center">
  <Link href="/dashboard" className='href'>
    <FontAwesomeIcon icon={faCalendar} className="fas fa-check mr-5" style={{ color: "black" }} />
    <span className="text-center">Calendar</span>
  </Link>
</button>
</aside>
    
    </>
  );
};

export default Sidebar;
