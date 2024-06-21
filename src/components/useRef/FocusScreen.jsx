import { useState } from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  const [initialState, setInitialState] = useState('text')
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.type === (inputRef.current.type = 'text')? setInitialState('password') : setInitialState('text')    
  };

  return (
    <section className="container d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column gap-2 align-items-center">
        <label htmlFor="">Ejemplo de Focus!</label>
        <input ref={inputRef} type={initialState}  name="" id=""  className="focus-ring border rounded-1"/>
        <button onClick={handleClick} className="btn btn-warning">mostrar</button>
      </div>
    </section>
  );
};
