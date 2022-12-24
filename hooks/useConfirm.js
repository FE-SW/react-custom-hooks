export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function" || typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      //confirm창 ok시
      onConfirm();
    } else {
      //confirm창 cancle시
      onCancel();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteFunc = () => console.log("delete work!");
  const cancleFunc = () => console.log("cancle work!");
  const confirmDelete = useConfirm("are you sure?", deleteFunc, cancleFunc);
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete this</button>
    </div>
  );
}

//사용자가 무언가를 하기전에 확인
