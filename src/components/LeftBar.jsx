import PropTypes from 'prop-types'

import styles from './LeftBar.module.css';
import './commonStyles.css'


function LeftBar({setShowModal}) {
  return (
    <div className={styles.leftContainer}>
         <div className={`flex-center roboto-medium ${styles.heading}`}>
            <p className={styles.headingText}>Pocket Notes</p>
        </div>


         <div className={styles.noteTabsContainer}>
        
        </div>


        <button className={`roboto-medium flex-center ${styles.addNoteButton}`} onClick={() => setShowModal(true)} >
            +
        </button>


    </div>
  )
}

export default LeftBar



LeftBar.propTypes = {
    setShowModal : PropTypes.func.isRequired,
}