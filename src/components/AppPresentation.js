import React, { useState } from 'react';

const App_presentation = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  }

  return (
    <div>
      <button onClick={handleClick}>What is Knowledge Tree Extension ?</button>
      {isShown && (
        <div>
          <p>Knowledge Tree offers you an optimized way of learning and remembering things !
            It will help you to learn with a top down approach. You will create a beautiful mindmap (or graph)
            of what you learned, and most importantly, it will give you a clear vision of your knowledge.
            Do not feel afraid to fall down the rabbit hole anymore !</p>
        </div>
      )}
    </div>
  );
};

export default App_presentation;