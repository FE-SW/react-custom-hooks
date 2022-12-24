import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        // 크롬
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        /// firefox
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // Microsoft
        element.current.msRequestFullscreen();
      }
      callback(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    callback(false);
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://placeimg.com/256/198/any" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

//이미지 확대하기
