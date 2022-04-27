import React from 'react'
import './App.css';

//Return statement in App function has HTML-like syntax, it is called JSX. A shorthand way of writing out a tree of HTML elements.

/* from V1 
function toDoList() {
  const [toDos, setToDos] = useState([]);
*/

function App() {
  const [toDos, setToDos] = React.useState([])
  const [inputTask, setInputTask] = React.useState("")


//Adding a preventDefault method is comment practice. The page doesn't refresh when we click on add to list. Good thing to have when submitting a form.

  function handleSubmit(e) {
    e.preventDefault()

    const newToDo = {
      id: new Date().getTime(),
      text: inputTask,
      completed: false,
    }

    setToDos([... toDos].concat(newToDo))
    setInputTask("")
  }

  function deleteToDo(id) {
    const updatedToDos = [... toDos].filter((toDo) => toDo.id !== id)

    setToDos(updatedToDos)
  }

// e is a form event, an event object. .target is the input and
//.value is the value of the input. We can check the on change is working in the hooks of Components React dev tools in the web broswer.

  return (
    <div className="App">
      <h1 id="title">TO DO LIST.</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"onChange={(e) => setInputTask(e.target.value)} value={inputTask}/>
        <button type="submit">Add To List</button>
      </form>
      {toDos.map((toDo) => <div id="inputText" key={toDo.id}>{toDo.text}
      <button  id="deleteBtn" onClick={() => deleteToDo(toDo.id)}>Delete</button>
      </div>)}
    </div>
  );
}

export default App;
