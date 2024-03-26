import { useState } from "react";

const Common = ({ name }: { name: string }) => {
  const [state, setState] = useState(0);

  return (
    <>
      <h2>Common counter for {name}</h2>
      <button onClick={() => setState(state - 1)}>-</button>
      <span>{state}</span>
      <button onClick={() => setState(state + 1)}>+</button>
    </>
  );
};

export default Common;
