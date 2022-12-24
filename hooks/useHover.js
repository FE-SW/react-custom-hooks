import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("mouseenter", onHover);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("mouseenter", onHover);
        }
      };
    }, []);
    return element;
  };
  
  export default function App() {
    const sayHello = () => console.log("say hello");
    const title = useHover(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hi</h1>
      </div>
    );
  }