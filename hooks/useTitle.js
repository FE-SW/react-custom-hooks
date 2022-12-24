import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // <title> //브라우저 title
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

//문서 제목 업데이트
// 처음에 Loading... 이였다가 3초뒤 Home으로 변경