import { useState, useRef, useEffect } from 'react';
import Editor from '../src/components/Editor';

interface Todo {
  id: number;
  content: string;
}

function App() {
  // useState은 하나의 타입 변수를 받는 제네릭 함수임
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>Todo</h1>

      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;
