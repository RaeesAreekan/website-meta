import React from 'react';
import Link from 'next/link';
import styles from '../styles/Listings.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
const RecentListings = ()=> {
  return (
    <>
    <div>
   <section className={`${styles.container} shadow-xl`}>
      <div className={styles.heading}>Recent listings </div>
      <div className={styles.buttonContainer}>
        <Link href="/page1" >
          <button className={styles.button}>
            Job 1
          </button>
        </Link>
        <Link href="/page2" >
          <button className={styles.button}>
            Job 2
          </button>
        </Link>
        <Link href="/page3" >
          <button className={styles.button}>
            Job 3
          </button>
        </Link>
      </div>
      <span className={`text-right ${styles.shift} `}> See all  <FontAwesomeIcon icon={faChevronRight} className="fas fa-check mr-2" style={{ color: "black" }} /></span>
      
         
    </section>
    {/* <section className={styles.notifcontainer} >Hello World</section> */}
    </div>
    </>
  )
};

export default RecentListings;
