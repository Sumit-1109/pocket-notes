import PropTypes from "prop-types";
import styles from "./FinalNote.module.css";
import { useEffect, useRef, useState } from "react";

function FinalNote({ noteText }) {
  const noteRef = useRef(null);
  const viewportHeight = window.innerHeight;
  const [noteHeight, setNoteHeight] = useState(0);

  const pxToVh = (px) => {
    return (px / viewportHeight) * 100;
  };

  useEffect(() => {
    if (noteRef.current) { 
        const contentHeight = noteRef.current.scrollHeight;
        const minimumHeightVh = pxToVh(contentHeight + 50);
        setNoteHeight(minimumHeightVh);
    }
  }, []);

  const baseMinHeightVh = 8;
  const appliedMinHeight = Math.max(noteHeight, baseMinHeightVh);

  return (
    <div
      className={styles.noteViewBox}
      style={{ minHeight: `${appliedMinHeight + 1.5}vh` }}
    >
      <p ref={noteRef} className={`${styles.actualNote} roboto-regular`}>
        {noteText}
      </p>
      <p className={`${styles.noteTimestamp} roboto-regular`}>08/11/2024</p>
    </div>
  );
}

export default FinalNote;

FinalNote.propTypes = {
  noteText: PropTypes.string.isRequired,
};
