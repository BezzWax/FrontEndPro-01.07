import logo from './logo.svg';
import './App.css';
//import EmojiVote from './Components/EmojiVote';
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

function EmojiVote(code) {
  //const [counter, setCounter] = useState(initialCounters);
  //let temp = 0;

  // const countOfVote = () => {
  //   setCounter(count => count + 1);
  //   temp++;
  //   console.log(temp)
  // }

  return (
    <div className="container">
      {/* <div className='emoji'>{code.id}</div>
      <button className='emojiButton' onClick={countOfVote}>+</button>
      <span className="counter">{counter}</span> */}
    </div>
  );
}



function App() {
  const [counter, setCounter] = useState(initialCounters);

  const countOfVote = (id) => {
    const updatedCounts = counter.map(el => el.id === id
      ? { ...el, value: el.value + 1 }
      : el);
    //setCounter(count => count + 1);
    setCounter(updatedCounts); // копія масиву
  }

  function ResultOfVote() {

    const maxCounter = counter.reduce((max, counter) => (counter.value > max.value ? counter : max), counter[0]);
    console.log(maxCounter);
    return (
      <div className='emoji' dangerouslySetInnerHTML={{ __html: maxCounter.id }}></div>
    );
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
      <button className='results' onClick={ResultOfVote}> Results</button>

      {/* <ResultOfVote /> */}
      {/* <EmojiVote id='&#128512;' />
      <EmojiVote id='&#128511;' />
      <EmojiVote id='&#128056;' />
      <button className='results' >Show results</button> */}

    </div>
  );
}

export default App;


