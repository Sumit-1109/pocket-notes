import PropTypes from 'prop-types';
import styles from './FinalNote.module.css';

function FinalNote({noteText}) {
  return (
    <div className={styles.noteViewBox}>
        <p className={`${styles.actualNote} roboto-regular`}>{noteText}</p>
    </div>
  )
}

export default FinalNote;

FinalNote.propTypes = {
    noteText: PropTypes.string.isRequired,
  };
  
