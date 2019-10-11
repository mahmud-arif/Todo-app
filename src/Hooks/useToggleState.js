import { useState } from "react";

function useToggle(intialValue = false) {
  const [state, setState] = useState(intialValue);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggle;
