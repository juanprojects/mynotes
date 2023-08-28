import {HashRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Routes>
          <Route path= "/"exact element={<NoteListPage/>}  />
          <Route path= "/note/:noteId" element={<NotePage/>}  />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;