import PropTypes from 'prop-types';
import styles from './notetab.module.css';

import './commonStyles.css'

function NoteTab({noteGroup}) {

  const{noteGroupName, noteLogoColor} = noteGroup;


  const extractInitials = (noteGroupName) => {
    return (noteGroupName.trim()
                .split(' ')
                .map((word)=> word.slice(0,1).toUpperCase())
                .slice(0,2)
                .join(''))
};

  return (
    <div className={styles.noteTab} >
      <div className={`${styles.logo} roboto-medium`}  style={{ backgroundColor: noteLogoColor }}>
        {extractInitials(noteGroupName)}
      </div>
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


