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
        <Route path="/" element={<Homepage/>} />
        <Route path="homepage" element={<Homepage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        <Route path="/batch" element={<Batch/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
