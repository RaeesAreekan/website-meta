import React from 'react';
import Link from 'next/link';
import styles from '../styles/Listings.module.css'
function RecentListings () {
  return (
    <>
   <div className={styles.container}>
      <div className={styles.heading}>My Heading</div>
      <div className={styles.buttonContainer}>
        <Link href="/page1" passHref>
          <button className={styles.button}>
            Page 1
          </button>
        </Link>
        <Link href="/page2" passHref>
          <button className={styles.button}>
            Page 2
          </button>
        </Link>
        <Link href="/page3" passHref>
          <button className={styles.button}>
            Page 3
          </button>
        </Link>
      </div>
    </div>
    </>
  )
};

export default RecentListings;
