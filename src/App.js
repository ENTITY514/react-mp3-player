import './App.css';
import Music_Page from './Components/Music_Page/music-page'
import Main_Page from './Components/Main_Page/main-page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main_Page />} />
          <Route path="/PlayList" element={<Music_Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
