import { useCounter } from "../../hooks/useCounter";
import { FocusScreen } from "../useRef/FocusScreen";

export const Home = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
    <section className="container mx-auto my-4 text-center">
      <article>
        <h2>Valor del contador: {counter}</h2>
        <div className="d-flex justify-content-center algin-items-center gap-3">
          <button onClick={decrement} className="btn btn-warning">
            restar
          </button>
          <button onClick={reset} className="btn btn-warning">reset</button>
          <button onClick={increment} className="btn btn-warning">
            sumar
          </button>
        </div>
      </article>
    </section>
			<FocusScreen/>
    </>
  );
};
