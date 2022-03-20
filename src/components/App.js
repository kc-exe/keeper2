import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((data) => {
        return (
          <Note key={data.key} title={data.title} content={data.content}></Note>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
