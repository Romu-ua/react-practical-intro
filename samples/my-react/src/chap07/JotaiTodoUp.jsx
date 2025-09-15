import { useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { todosAtom, todoAddAtom, todoDoneAtom, todoRemoveAtom } from '../store/atom';
import '../chap04/StateTodo.css';

export default function JotaiTodoUp() {
  const [title, setTitle] = useState('');
  const todo = useAtomValue(todosAtom);
  const todoAdd = useSetAtom(todoAddAtom);
  const todoDone = useSetAtom(todoDoneAtom);
  const todoRemove = useSetAtom(todoRemoveAtom);

  const handleChangeTitle = e => setTitle(e.target.value);
  const handleAdd = () => todoAdd(title);
  const handleDone = e => todoDone(e.target.dataset.id);
  const handleRemove = e => todoRemove(e.target.dataset.id);

  return (
    <div>
      <label>
        やること：
        <input type="text" name="todo"
          value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button"
        onClick={handleAdd}>追加</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id}
            className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button"
              onClick={handleDone} data-id={item.id}>済
            </button>
            <button type="button"
              onClick={handleRemove} data-id={item.id}>削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}