import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  // validator 함수
  const valueLen = (value) => value.length <= 10;
  const name = useInput("Mr.", valueLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />{" "}
      {/* value={name.value} onChange={name.onChange} */}
    </div>
  );
}
//검증 기능이 있는 useInput
