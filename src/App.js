import './App.css';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

function App() {
  return (
    <div>
    <Kitchen/>
    <Bedroom bedNum={1}/>
    <LivingRoom/>
    <Bath size={'Full'}/>
    <Bedroom bedNum={2}/>
    <Bath size={'Half'}/>
    <Bedroom bedNum={3}/>
    </div>
  );
}

export default App;
