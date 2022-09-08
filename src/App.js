import './App.css';
import { Chronometer } from './components/Chronometer/chronometer';
import {Counter} from './components/Counter/Counter';
import { Timer } from './components/Timer/timer';
import ContentContextProvider from './Context/context';

function App() {

  return (
  
      <ContentContextProvider>
          <div className='container'>
       
        <div className='container-content'>
        <Chronometer/>
       </div>
       <div className='container-content'>
      <Counter/>
        </div>
       <div className='container-content'>
        <Timer/>
       </div>
       </div>
      </ContentContextProvider>
   
  
  );
}

export default App;
