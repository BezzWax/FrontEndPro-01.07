import './App.css';
import { React, useState } from 'react';

const initialCounters = [
  {
    id: `&#128512;`,
    value: 0
  },
  {
    id: '&#128511;',
    value: 0
  },
  {
    id: '&#128056;',
    value: 0
  }
];

function App() {
  const [counter, setCounter] = useState(initialCounters);
  const [winner, setWinner] = useState(null);

  const countOfVote = (id) => {
    const updatedCounts = counter.map(el => el.id === id
      ? { ...el, value: el.value + 1 }
      : el);
    setCounter(updatedCounts);
  }

  function ResultOfVote() {
    const maxCounter = counter.reduce((max, counter) => (counter.value > max.value ? counter : max), counter[0]);
    setWinner(maxCounter);
  }

  return (
    <div className="App">
      <ul>
        {counter.map(el => (
          <li key={el.id}>
            <div className='emoji' dangerouslySetInnerHTML={{ __html: el.id }}></div>
            {el.value}
            <button className='emojiButton' onClick={() => countOfVote(el.id)}>+</button>
          </li>
        ))}
      </ul>
      <button className='results' onClick={ResultOfVote}>Results</button>

      {winner && (
        <div className='winner'>
          <p>Winner:</p>
          <div className='emoji' dangerouslySetInnerHTML={{ __html: winner.id }}></div>
          <p>Votes: {winner.value}</p>
        </div>
      )}
    </div>
  );
}

export default App;
