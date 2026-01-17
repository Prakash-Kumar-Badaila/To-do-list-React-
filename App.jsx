import './App.css'
import { useState } from 'react';
function App() {
  let[todolist , setTodolist]=useState([])
  

let saveToDolist=(event)=>{
  let toname = event.target.toname.value;
  if(!todolist.includes(toname))
  {
  let finalDolist = [...todolist,toname]
  setTodolist(finalDolist);
  }
  else{
    alert("ToDO is already Exits...")
  }
  
  event.preventDefault();
}
let list = todolist.map((value,index)=>{
  return(
    <ToDOListItems value={value} key={index} indexNumber={index} todolist={todolist}   
    setTodolist={setTodolist}
    ></ToDOListItems>
  )

})
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form action="" onSubmit={saveToDolist}>
        <input type="text" name="toname" /><button>save</button>
      </form>
      <div className="outerDiv">
        <ul>
        {list}
      

      </ul>
      </div>
    </div>
  )
}

export default App
function ToDOListItems({value,indexNumber,todolist,setTodolist}){
  console.log(indexNumber)
  console.log(value)
  console.log(todolist)
  console.log(setTodolist)

  let deleteRow=()=>{
    let finalData = todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
  }
  return(
        <li>{value}<span onClick={deleteRow}>&times;</span> </li>

  )
}