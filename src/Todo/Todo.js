import React, {useState, useEffect} from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import List from './List'
import{ db }from "./firebase.js"
import {query, collection, onSnapshot,  updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'

const style = {
    container: `bg-cont max-w-[500px] w-full rounded-md shadow-xl p-4 mt-20 mb-20 `,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`, 
    form: `flex justify-between `,
    input: `border rounded-md p-2 w-full text-xl`,
    button: `border rounded-full p-4 ml-2 bg-m-green`,
    count: `text-center p-2`,

}

function Todo() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    
// create todo 
const createTodo =  async (e) => {
    e.preventDefault(e)
    if(input === ''){
        alert('Please enter a valid input')
        return
    }
    await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false
    })
    setInput('')


}
// read todo
    useEffect(()=>{
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (querySnapshot)=> {
            let todosArr = []
            querySnapshot.forEach((doc)=>{
                todosArr.push({...doc.data(), id: doc.id})
            })
            setTodos(todosArr)
        })
        return () => unsubscribe()
    }, [])
// update todo
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    }
// delete todo
     const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
     }

  return (
    <div className={style.container}>
        <h3 className={style.heading}>To-Do</h3>
        <form onSubmit={createTodo} className={style.form}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Add Todo' />
            <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
            {todos.map((todo, index)=> {
                return <List todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            })}
        </ul>
                <p className={style.count}>{`You have ${todos.length} todos`}</p>
    </div>
  )
}

export default Todo