import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function RecentN() {
  return (
    <>
    <div className='w-1/2'>
      <div className='mt-10 pb-4 recent shadow-lg'>
        <div className='flex flex-row justify-between'>
          <div>Recent Listings</div>
          <div className='px-8'><Link href="">See All <FontAwesomeIcon icon={faChevronRight} className="fas fa-check mr-2" style={{ color: "black" }} /></Link></div>

        </div>
        <div className='flex flex-rowv justify-start'>
          <button className='h-28 recentBox rounded-xl mr-7 w-48 flex items-start pl-2 hover:text-lg'>
            JOB1
            </button>
          <button className='w-48 h-28 recentBox rounded-xl  mr-7 flex items-start pl-2 hover:text-lg'>JOB2</button>
          <button className='w-48 h-28 recentBox rounded-xl flex items-start pl-2 hover:text-lg'>JOB3</button>
        </div>
        </div>  {/*1st row box*/}
      <div className='pb-4 pt-4 shadow-md'>
        <div className='flex flex-row justify-start recent'>
          <button className='ml-6 w-72 h-36 border-solid border-2 border-black rounded-xl mr-11 postJob'>Post a Job</button>
          <button className='w-72 h-36 border-solid border-2 border-black rounded-xl postJob'>Candidates</button>

        </div>
      </div>

    </div>
    </>
)}
