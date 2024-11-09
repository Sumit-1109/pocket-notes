import PropTypes from "prop-types";

import styles from "./LeftBar.module.css";
import "./commonStyles.css";

import NoteTab from "./NoteTab";

function LeftBar({ setShowModal, noteGroups, setActiveNote, activeNote }) {
  const leftContainerClass = `${styles.leftContainer} ${
    activeNote ? styles.hideLeftSection : ""
  }`;

  return (
    <div className={leftContainerClass}>
      <div className={`roboto-medium ${styles.heading}`}>
        <p className={styles.headingText} onClick={() => setActiveNote(null)}>
          Pocket Notes
        </p>
      </div>

      <div className={styles.noteTabsContainer}>
        {noteGroups.map((noteGroup, index) => (
          <NoteTab
            key={index}
            noteGroup={noteGroup}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        ))}
      </div>

      <button
        className={`roboto-medium flex-center ${styles.addNoteButton}`}
        onClick={() => setShowModal(true)}
      >
        +
      </button>
    </div>
  );
}

export default LeftBar;

LeftBar.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  noteGroups: PropTypes.arrayOf(
    PropTypes.shape({
      noteGroupName: PropTypes.string.isRequired,
      noteLogoColor: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          timestamp: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  activeNote: PropTypes.shape({ noteGroupName: PropTypes.string }),
  setActiveNote: PropTypes.func.isRequired,
};
