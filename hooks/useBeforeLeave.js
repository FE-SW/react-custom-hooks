import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  const handleAlert = (event) => { // 창 위로갈때만 작동(없으면 위 아래로 벗어나면 작동)
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleAlert);
    return () => document.removeEventListener("mouseleave", handleAlert);
  }, []);
};

export default function App() {
  const alertLeave = () => console.log("mouese leave");
  useBeforeLeave(alertLeave);
  return (
    <div className="App">
      <h1>detect mouse leaving</h1>
    </div>
  );
}

//마우스가 창을 벗어날 때 함수 실행
