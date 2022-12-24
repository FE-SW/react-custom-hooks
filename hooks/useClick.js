import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef(); // HTML 태그 연결(특정 태그에 접근하는 hook, document.getElementByID() 처럼)
  useEffect(() => {
    if (element.current) {
      // 반드시 current로 접근
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // 한번만 실행
  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const clickRef = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={clickRef}>Hi</h1>
    </div>
  );
}

//특정태그 클릭시 특정 함수 실행(= onClick)
