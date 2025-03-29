import './App.css'
import SlowComponent from './SlowComponent'
import ButtonWithModal from './ButtonWithModal';
import RefactorComponent from './RefactorComponent';

function App() {

  return (
    <>
    
        <RefactorComponent >
          {/* As a child we have to send */}
            <>
            <div>Something Done here</div>
            <ButtonWithModal/>
            <div>Something Done here</div>
            <SlowComponent/>
            </>
        </RefactorComponent>
    </>
  )
}

export default App;
