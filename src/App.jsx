import { useState } from 'react'

import LeftBar from './components/LeftBar';
import RightSection from './components/RightSection';
import Modal from './components/Modal';
import NoteWindow from './components/NoteWindow';

import './App.css'
import './index.css'

function App() {

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    name: '',
    color: ''
  })
  const [noteGroups, setNoteGroups] = useState(JSON.parse(localStorage.getItem('noteGroups')) || []);

  const handleSaveData = (noteGroups) => {
    
    localStorage.setItem('noteGroups', JSON.stringify(noteGroups));

  }

  const[activeNote, setActiveNote] = useState(null);

  return (
    <div className='main'>

      <LeftBar setShowModal={setShowModal} noteGroups={noteGroups} setActiveNote={setActiveNote} activeNote={activeNote} />

      {activeNote !== null ? (<NoteWindow setNoteGroups={setNoteGroups} noteGroups={noteGroups} clickedNote={activeNote} setClickedNote={setActiveNote} handleSaveData={handleSaveData} />) : (<RightSection />)}

      {showModal && <Modal setShowModal={setShowModal} setModalData={setModalData} modalData={modalData} noteGroups={noteGroups} setNoteGroups={setNoteGroups} handleSaveData={handleSaveData} /> }

    </div>
  )
}

export default App
