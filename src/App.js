import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    // [6, ...[1, 2, 3, 4]] === [6, 1, 2, 3, 4];
    setToDos((currentArray) => [toDo, ...currentArray]);
    // state를 직접 수정하지 못함. 함수 사용
    // toDo = "" // 에러
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
    </div>
  );
}

export default App;
