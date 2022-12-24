export const usePreventLeave = () => {
  const listener = (event) => { //alert창으로 사이트 떠날거냐고 물어봄
    event.preventDefault();
    event.returnValue = ""; // 이걸 넣어야 동작함
  };
  const enablePreve = () => window.addEventListener("beforeunload", listener); //window에 beforeunload 이벤트리스너를 달아줌 (원래 내장된 이벤트임)

  const disablePreve = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePreve, disablePreve };
};

export default function App() {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>protect</button>
      <button onClick={disablePreve}>unprotect</button>
    </div>
  );
}

//window 창 닫기 전 알림
//api 요청 후 응답이 안왔는데 사용자가 창을 닫을려고 하는 경우
