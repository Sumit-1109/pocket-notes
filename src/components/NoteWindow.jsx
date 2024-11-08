import { useState, useEffect } from "react";
import NoteLogo from "./NoteLogo";
import "./commonStyles.css";
import styles from "./NoteWindow.module.css";
import sendButton from "../assets/send.png";
import sendActive from "../assets/send-active.png";
import back from "../assets/back.png";

import FinalNote from "./FinalNote";


function NoteWindow({
  setNoteGroups,
  noteGroups,
  clickedNote,
  setClickedNote,
  handleSaveData,
}) {

  const notes = clickedNote.notes;
  const [noteText, setNoteText] = useState("");
  const [actualNotes, setActualNotes] = useState('');



  const handleSaveNoteText = () => {
    setActualNotes(noteText);
    setNoteText('');
  }


  const handleChange = (e) => {
    setNoteText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() !== "") {
      handleSaveNoteText();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' &&  noteText.trim() !== "") {
        handleSubmit(e);
    }
  }

  return (
    <div className={styles.notewindow}>
      <div className={styles.noteheader}>
        <div className={styles.headerContent}>
          <div className={styles.backButtonContainer}>
            <img src={back} alt="back button" className={styles.backButton} onClick={()=> {setClickedNote(null)}} />
          </div>
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
      {actualNotes !== '' && <FinalNote noteText={actualNotes}/>}
      </div>


      <div className={styles.footer}>
        <form className={styles.noteTextArea} onSubmit={handleSubmit}>
          <textarea
            className={`${styles.noteTextBox} roboto-regular`}
            placeholder="Enter your text here..........."
            value={noteText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className={styles.noteWindowSubmitButton}>
            <img
              src={noteText.trim() !== "" ? sendActive : sendButton}
              alt="send Button"
              className={styles.sendButton}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteWindow;
