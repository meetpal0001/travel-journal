import './App.css';
import Book from './Book';
import { useState } from 'react';
import Data from './Data'


function App() {

  let x = Array(Data.length + 1).fill(false);

  let [flipped, setflipped] = useState(x)

  let [currentPage, setCurrentPage] = useState(0)

  function handleFlip(x) {
    if (x >= 0) {
      const nextFlip = flipped.map((c, i) => {
        if (i === x) {
          // Increment the clicked counter
          return !c;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setflipped(nextFlip);
    }

  }

  function nextPage() {
    if (currentPage + 1 < Data.length + 1) {
      handleFlip(currentPage)

      setCurrentPage(currentPage + 1)
    }
  }

  function prevPage() {
    handleFlip(currentPage - 1)
    setCurrentPage((currentPage - 1) >= 0 ? currentPage - 1 : currentPage)

  }





  return (
    <div className="App">
      <img id='leftArrow' src="../images/arrow.png" alt="leftArrow" onClick={prevPage} />

      <Book curPage={currentPage} flip={flipped} />
      <img id='rightArraow' src="../images/arrow.png" alt="leftArrow" onClick={nextPage} />
    </div>
  );
}

export default App;
