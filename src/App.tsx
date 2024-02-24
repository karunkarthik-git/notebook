import './App.css';
import ListItems from './components/items-list/list-items';
import NavBar from './components/nav-bar/nav-bar';
import { Link, Route, Routes } from 'react-router-dom';
import NotesList from './components/notes-list/notes-list';

const App = () => {
  
  const NoMatch = () => {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/notes/:notesId" element={<ListItems />} />
        <Route path="/" element={<NotesList />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
