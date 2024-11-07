import PropTypes from 'prop-types'

import styles from './LeftBar.module.css';
import './commonStyles.css'

import NoteTab from './NoteTab';

function LeftBar({setShowModal, noteGroups,}) {
  return (
    <div className={styles.leftContainer}>
         <div className={`roboto-medium ${styles.heading}`}>
            <p className={styles.headingText}>Pocket Notes</p>
        </div>


        <div className={styles.noteTabsContainer}>
            {noteGroups.map((noteGroup, index) => (
                <NoteTab key={index} noteGroup={noteGroup} />
            ))}
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
    noteGroups: PropTypes.arrayOf(
        PropTypes.shape({
          noteGroupName: PropTypes.string.isRequired,
          noteLogoColor: PropTypes.string.isRequired,
        })
      ).isRequired,
}