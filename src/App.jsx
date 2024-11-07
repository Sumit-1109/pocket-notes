import { useState } from 'react'

import LeftBar from './components/LeftBar';
import RightSection from './components/RightSection';
import Modal from './components/Modal';

import './App.css'

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

  return (
    <div className='main'>

      <LeftBar setShowModal={setShowModal} noteGroups={noteGroups} />

      <RightSection />

      {showModal && <Modal setShowModal={setShowModal} setModalData={setModalData} modalData={modalData} noteGroups={noteGroups} setNoteGroups={setNoteGroups} handleSaveData={handleSaveData} /> }

    </div>
  )
}

export default App
