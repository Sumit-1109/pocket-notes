import PropTypes from 'prop-types';
import styles from './notelogo.module.css';

function NoteLogo({noteGroupName, noteLogoColor, activeNote}) {

    const extractInitials = (noteGroupName) => {
        return (noteGroupName.trim()
                    .split(' ')
                    .map((word)=> word.slice(0,1).toUpperCase())
                    .slice(0,2)
                    .join(''))
    };

    // const isActive =activeNote && (activeNote.noteGroupName === noteGroupName);
    const logoClass = `${activeNote !== null ? styles.logoActive : styles.logoInactive}`;

  return (
    <div className={`${logoClass} ${styles.logo} flex-center roboto-medium`}  style={{ backgroundColor: noteLogoColor }}>
        {extractInitials(noteGroupName)}
      </div>
  )
}

export default NoteLogo

NoteLogo.propTypes = {
    noteGroupName: PropTypes.string.isRequired,
    noteLogoColor: PropTypes.string.isRequired,
    activeNote: PropTypes.shape({ noteGroupName: PropTypes.string, })
  };