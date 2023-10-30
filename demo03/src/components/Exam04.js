import React, { useState } from 'react';

function App() {
  const [text, setText] = useState(0);

  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 1000) {
      setText(inputText);
    }
  };

  return (
    <div>
        <h4>주말에 뭐하세요?</h4>
      <textarea
        value={text}
        onChange={handleChange}
        rows={10} 
        cols={30} 
        maxLength={1000}
      />

      <div>
        {text.length}/1000
      </div>
    </div>
  );
}

export default App;
