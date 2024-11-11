import { useState, useEffect, useRef } from "react";
import NoteLogo from "./NoteLogo";
import PropTypes from "prop-types";
import styles from "./NoteWindow.module.css";
import sendButton from "../assets/send.png";
import sendActive from "../assets/send-active.png";
import back from "../assets/back.png";
import '../index.css'

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
  const [actualNotes, setActualNotes] = useState(notes);

  const contentRef = useRef(null);

  const handleChange = (e) => {
    setNoteText(e.target.value);
  }

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('noteGroups')) || [];
    const requiredGroup = savedNotes.find(group => group.noteGroupName === clickedNote.noteGroupName);
    setActualNotes(requiredGroup ? requiredGroup.notes : []);
  }, [clickedNote.noteGroupName])

  const handleSaveNoteText = () => {

    const newNoteData = {
      text: noteText,
      timestamp: new Date()
        .toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(/,/, " • "),
    };

    const updatedActualNotes = [...actualNotes, newNoteData];

    const updatedNoteGroups = noteGroups.map((group) => {
      if (group.noteGroupName === clickedNote.noteGroupName){
        return {...group, notes: updatedActualNotes}
      }
      return group;
    })

    setActualNotes(updatedActualNotes);
    setNoteGroups(updatedNoteGroups);
    handleSaveData(updatedNoteGroups);

      setNoteText('');
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

  useEffect(()=>{
    if (contentRef.current){
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [actualNotes]);

  return (
    <div className={styles.noteWindow}>
      <div className={`align-center ${styles.noteWindowHeader}`}>
          <div className={styles.backButtonContainer}>
            <img src={back} alt="back button" className={styles.backButton} onClick={()=> {setClickedNote(null)}} />
          </div>
          <div className={styles.noteHeaderLogo}>
            <NoteLogo
              noteGroupName={clickedNote.noteGroupName}
              noteLogoColor={clickedNote.noteLogoColor}
              className={styles.NoteLogo}
            />
          </div>
          <p className={`${styles.noteWindowTitle} roboto-medium`}>
            {clickedNote.noteGroupName.trim()}
          </p>
      </div>


      <div className={`${styles.content}`} ref={contentRef}>
        {actualNotes.map((note, index) => (
            <FinalNote key={index} noteText={note.text} timestamp={note.timestamp} />
        ) )}
      </div>


      <div className={`flex-center ${styles.footer}`}>
        <form id="textBox" className={styles.noteTextArea} onSubmit={handleSubmit}>
          <textarea
            id="textArea"
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



NoteWindow.propTypes = {
  clickedNote: PropTypes.shape({
    noteGroupName: PropTypes.string.isRequired,
    noteLogoColor: PropTypes.string.isRequired,
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  noteGroups: PropTypes.arrayOf(
    PropTypes.shape({
      noteGroupName: PropTypes.string.isRequired,
      noteLogoColor: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          timestamp: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  setClickedNote: PropTypes.func.isRequired,
  setNoteGroups: PropTypes.func.isRequired,
  handleSaveData: PropTypes.func.isRequired,
};