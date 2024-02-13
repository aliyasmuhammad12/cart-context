
import './App.css';
import Crat from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
    <Item name="MacBook pro" price="100000"/>
    <Item name="PenDrive" price="4000"/>
    <Item name="Iphone" price="82000"/>
    <Crat/>
    </div>
  );
}

export default App;
