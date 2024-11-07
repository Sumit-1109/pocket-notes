import { useState } from 'react'

import LeftBar from './components/LeftBar';
import RightSection from './components/RightSection';
import Modal from './components/Modal';

import './App.css'

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='main'>

      <LeftBar setShowModal={setShowModal} />

      <RightSection />

      {showModal && <Modal setShowModal={setShowModal}/> }

    </div>
  )
}

export default App
