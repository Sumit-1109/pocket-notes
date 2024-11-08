import PropTypes from "prop-types";
import styles from "./FinalNote.module.css";

function FinalNote({ noteText }) {

  return (
    <div className={styles.noteViewBox}>
      <p className={`${styles.actualNote} roboto-regular`}>{noteText}</p>
      <p className={`${styles.noteTimestamp} roboto-regular`}>08/11/2024</p>
    </div>
  );
}

export default FinalNote;

FinalNote.propTypes = {
  noteText: PropTypes.string.isRequired,
};
