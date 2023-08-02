import React from 'react';

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = '';
  const cssStyle = {};
  if (curDate >= 1 && curDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';
  } else if (curDate >= 12 && curDate < 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange';
  } else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span>{greeting} </span>
        </h1>
      </div>
    </>
  );
}

export default App;
