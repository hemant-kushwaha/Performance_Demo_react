import { useState } from 'react'
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';

function App() {
  const [isOpen,setISOpen] =useState(false);

  return (
    <>
      <button onClick={()=>setISOpen(true)}>Open Modal</button>
      <div>Something Done here</div>
      <div>
      {isOpen && <Modal setISOpen={setISOpen}/>}

      </div>
      <div>Something Done here</div>
      <SlowComponent/>
    </>
  )
}

export default App;
