import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("/api/books")
        .then(res => res.json())
        .then(data => {
          setBooks(data)
        })
    }, 2000)
  }, []);
  const addBook = () => {
    const title = prompt("Enter Book Title");
    const author = prompt("Enter Book Author");
    if (!title || !author)
      return false
    fetch("api/add", {
      method: "post",
      body: JSON.stringify({ title, author })
    }).then(res => res.json())
      .then(data => console.log(data))
  }
  if (!books.length)
    return <h2>Loading...!</h2>
  return (
    <div className="App">
      <h1>Available Books</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((bookObj, index) => {
            return (<tr key={index}>
              <td>{bookObj.title}</td>
              <td>{bookObj.author}</td>
            </tr>)
          })}
        </tbody>
      </table>
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default App;
