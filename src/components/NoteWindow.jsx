import { useState, useEffect } from "react";
import NoteLogo from "./NoteLogo";
import "./commonStyles.css";
import styles from "./NoteWindow.module.css";
import sendButton from "../assets/send.png";
import sendActive from "../assets/send-active.png";


function NoteWindow({
  setNoteGroups,
  noteGroups,
  clickedNote,
  handleSaveData,
}) {

  const [noteText, setNoteText] = useState("");

  return (
    <div className={styles.notewindow}>
      <div className={styles.noteheader}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <NoteLogo
              noteGroupName={clickedNote.noteGroupName}
              noteLogoColor={clickedNote.noteLogoColor}
              className={styles.NoteLogo}
            />
          </div>
          <p className={`${styles.noteGroupNameTitle} roboto-medium`}>
            {clickedNote.noteGroupName.trim()}
          </p>
        </div>
      </div>


      <div className={styles.content}>
        
      </div>


      <div className={styles.footer}>
        <form className={styles.noteTextArea}>
          <textarea
            className={`${styles.noteTextBox} roboto-regular`}
            placeholder="Enter your text here..........."
            value={noteText}
          />
          <button type="submit" className={styles.noteWindowSubmitButton}>
            <img
              src={noteText.trim() !== "" ? sendActive : sendButton}
              alt="send Button"
              className={styles.sendButtonActive}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteWindow;
