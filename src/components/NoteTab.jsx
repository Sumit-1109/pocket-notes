import PropTypes from 'prop-types';
import styles from './notetab.module.css';
import '../index.css'

import NoteLogo from './NoteLogo';

function NoteTab({noteGroup, setActiveNote, activeNote}) {

  const{noteGroupName, noteLogoColor} = noteGroup;

  const handleClick = () => {
    setActiveNote(prevActiveNote => (prevActiveNote && prevActiveNote.noteGroupName === noteGroup.noteGroupName ? null : noteGroup))
  }

  const isActive =activeNote && (activeNote.noteGroupName === noteGroupName);
  const noteTabClass = `${isActive ? styles.active : ''} ${styles.noteTab}`;

  return (
    <div className={`align-center ${noteTabClass}`} onClick={handleClick} >
      <NoteLogo noteGroupName={noteGroupName} noteLogoColor={noteLogoColor} />
      <p className={`${styles.noteTabTitle} roboto-medium`}>{noteGroupName.trim()}</p>
    </div>
  )
}

export default NoteTab

NoteTab.propTypes = {
  noteGroup: PropTypes.shape({
    noteGroupName: PropTypes.string.isRequired,
    noteLogoColor: PropTypes.string.isRequired,
    notes: PropTypes.array
  }).isRequired,
  setActiveNote: PropTypes.func.isRequired,
  activeNote: PropTypes.shape({
    noteGroupName: PropTypes.string,
  })
};



