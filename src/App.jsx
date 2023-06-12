import React, { useState } from 'react';
import './App.css';


function App() {
  const [text, setText] = useState(''), [isPalindrome, setIsPalindrome] = useState(false), [letterCount, setLetterCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkPalindrome();
    }
  };

  const checkPalindrome = () => {
    const cleanedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');
    const count = cleanedText.length;
    setIsPalindrome(cleanedText === reversedText);
    setLetterCount(count);
  };

  return (
    <>
    <div className='real-father'>
      {isPalindrome && <p>Is a Palindrome</p>}
      {!isPalindrome && <p>Is not a Palindrome</p>}
      <input placeholder='Write Here' type="text" value={text} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button onClick={checkPalindrome}>Check</button>
      <p>Letters: {letterCount}</p>
    </div>
  </>
  );
}

export default App;
