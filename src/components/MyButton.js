import React, { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click {count} times</button>
    </div>
  );
};

export default MyButton;
