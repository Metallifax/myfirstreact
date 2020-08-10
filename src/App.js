import React from 'react';
import './App.css';

function App() {
  const element = <p>This is a sentence!</p>;
  const sentences = [
    "Hello world!",
    "To boldly go where no man has gone before...",
    "I'm a teapot short and stout",
    "Oh jeez!",
    "Heck me!",
    "Oh heck!",
    "Jesus loves me yes he does"
  ];
  const randomSentence = () => {
    return sentences[Math.floor(Math.random() * sentences.length)];
  };

  const myId = "test";
  const element2 = <h1 id={myId}>Hello, world!</h1>;

  function ActionLink(){
    function handleClick(e) {
      e.preventDefault();
      console.log(randomSentence());
    }
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

  return (
    <div className="App">
      {element2}
      {element}
      {randomSentence()}
      <div>
        <ActionLink />
      </div>
    </div>
  );
}

export default App;
