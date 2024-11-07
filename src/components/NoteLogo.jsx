import PropTypes from 'prop-types';
import styles from './notelogo.module.css';

function NoteLogo({noteGroupName, noteLogoColor}) {

    const extractInitials = (noteGroupName) => {
        return (noteGroupName.trim()
                    .split(' ')
                    .map((word)=> word.slice(0,1).toUpperCase())
                    .slice(0,2)
                    .join(''))
    };

  return (
    <div className={`${styles.logo} roboto-medium`}  style={{ backgroundColor: noteLogoColor }}>
        {extractInitials(noteGroupName)}
      </div>
  )
}

export default NoteLogo

NoteLogo.propTypes = {
    noteGroupName: PropTypes.string.isRequired,
    noteLogoColor: PropTypes.string.isRequired,
  };