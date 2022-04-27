import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Setting from './Pages/Setting/Setting';
import './App.css';

function App() {
  return (
    <div className="App">
         <Router>
            <Routes>
              <Route path="/" exact element={<Setting/>} />
            </Routes>
         </Router>
    </div>
  );
}

export default App;
