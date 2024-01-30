import Batch from './components/Batch';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/productid" element={<Productpage/>}/>
        <Route path='/batchid' element={<Batch/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
