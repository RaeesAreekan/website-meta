import React from 'react'
import styles from '../styles/Listings.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";
export default function Post_Candidates() {
  return (
    <>
    <div className={`${styles.Postcontainer} shadow-2xl`}>
        <div className={styles.postButcontainer}>
            <button className={styles.postButton}>
                Post a job <FontAwesomeIcon icon={faCaretRight} className="fas fa-check mr-2" style={{ color: "black" }} />
            </button>
            <button className={styles.postButton}>
                Candidates <FontAwesomeIcon icon={faCaretRight} className="fas fa-check mr-2" style={{ color: "black" }} />
            </button>

        </div>
      
    </div>
    </>
  )
}
