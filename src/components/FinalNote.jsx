import PropTypes from "prop-types";
import styles from "./FinalNote.module.css";
import { useEffect, useRef, useState } from "react";

function FinalNote({ noteText }) {

    const noteRef = useRef(null);
    const [noteHeight, setNoteHeight] = useState(0);

    useEffect(()=> {
        if (noteRef.current) {
            setNoteHeight(noteRef.current.scrollHeight);
        }
    }, [])

  return (
    <div className={styles.noteViewBox} style={{minHeight: `${noteHeight+50}px`}}>
      <p ref={noteRef} className={`${styles.actualNote} roboto-regular`}>{noteText}</p>
      <p className={`${styles.noteTimestamp} roboto-regular`}>08/11/2024</p>
    </div>
  );
}

export default FinalNote;

FinalNote.propTypes = {
  noteText: PropTypes.string.isRequired,
};
