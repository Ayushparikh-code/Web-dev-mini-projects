import React, {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
setNotes(prevNotes => {
 return [...prevNotes, newNote];
});

  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index)=>{
        return <Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNote}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
