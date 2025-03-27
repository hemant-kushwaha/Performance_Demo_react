import { useState } from 'react'
import Modal from './Modal';
export default function ButtonWithModal () {
    const [isOpen,setISOpen] =useState(false);

    return (
        <>
     <button onClick={()=>setISOpen(true)}>Open Modal</button>
      <div>
      {isOpen && <Modal setISOpen={setISOpen}/>}
      </div>
        
        </>
    )
}