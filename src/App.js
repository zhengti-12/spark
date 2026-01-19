import {useState} from 'react'
import './App.css';

function App() {
  const [books, setbooks] = useState([])
  const [title, settitle] = useState('')
  const [genre, setgenre] = useState('')
  const [date, setdate] = useState('')
  const [popup, setpopup] = useState(false)
  const [recgenre, setrec] = useState('')
  const [wantsrec, setwrec] = useState(false)

  function Addbook () {
    if (title === "") {
      alert("type a book title")
    } 
    else {
      setpopup(true)

    const newbook = {
      title: title,
      genre: genre,
      date: date
    }

    setbooks([...books, newbook])
    settitle('')
    setgenre('')
    setdate('')
    }
  }

  const closepopup = () => {
    setpopup(false)
    setwrec(false)
    setrec('')
  }

  return (
    <div className = "appheader">
      <div className="book">
       <h2>Log a new book</h2>

        <input 
          type ="text" 
          placeholder ="book title"
          value = {title}
          onChange = {(e) => settitle(e.target.value)}
        />

      <select value={genre} onChange = {(e) => setgenre(e.target.value)}>
        <option value = "">select a genre</option>
        <option value = "romance">romance</option>
        <option value = "comedy">comedy</option>
        <option value = "sci_fi">Sci-fi</option>
        <option value = "action">action</option>
        <option value = "horror">horror</option>
        <option value = "non_fiction">non-fiction</option>
      </select>

      <input 
        type ="date"
        value = {date}
        onChange = {(e) => setdate(e.target.value)}/>

      <button onClick={Addbook}> Add book </button>
      </div>

      <div className="booklog">
        <h2>Book Log</h2>
        <table className="btable">
          <thead>
            <tr>
              <th>Book title</th>
              <th>Genre</th>
              <th>Date read</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {popup && (
        <Recpopup
        wantsrec={wantsrec}
        setwrec={setwrec}
        recgenre={recgenre}
        setrec={setrec}
        recs={recs}
        onclose={closepopup}/>
      
      )}
    </div>
  )
}

function Recpopup({wantsrec, setwrec, recgenre, setrec, recs, onclose}) {
  return (
    <div className = "popupoverlay">
                <div className="popupcontent">

            {!wantsrec ? (
            <>
            <h3>Book logged! Would you like a recommendation?</h3>
            <button onClick ={() => setwrec(true)}>yes</button>
            <button onClick={onclose}>No</button>
            </>
            ) : (
            <>
            <p>Pick a genre:</p>
            <select onChange={(e) => setrec(e.target.value)}>
              <option value="">Choose</option>
              <option value="romance">romance</option>
              <option value="sci_fi">Sci-fi</option>
              <option value="non_fiction">non-fiction</option>
              <option value="horror">horror</option>
              <option value="comedy">comedy</option>
              <option value="action">action</option>
            </select>

            {recgenre && (
              <div className="result">
                <p>You should read: <b>{recs[recgenre]}</b></p>
               <button onClick={onclose}>Exit</button>
            </div>
            )}
          </>
          )}
        </div>
    </div>
  )
}

const recs ={
  romance: "Twilight",
  comedy: "The Princess Bride",
  action: "The Maze Runner",
  horror: "It",
  sci_fi: "The Expanse",
  non_fiction: "outliers"
}

export default App;
