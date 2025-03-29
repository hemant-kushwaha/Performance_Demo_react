import useModalDialogBox from './Hooks/useModalDialogBox';
import Modal from './Modal';
export default function ButtonWithModal () {
    const {isOpen,open,close} = useModalDialogBox();

    return (
        <>
     <button onClick={open}>Open Modal</button>
      <div>
      {isOpen && <Modal close= {close}/>}
      </div>
        
        </>
    )
}