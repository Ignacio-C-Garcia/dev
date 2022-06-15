import React, { useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
    const [todos, setTodos] = useState([{title:"celebra", id:1, latitud:-34.749201, longitud:-54.0192785, url:"https://www.youtube.com/watch?v=SNlF-4guz8w"}, {title:"iglesia", id:2, latitud:-34.190201, longitud:-54.0190915, url:"https://www.youtube.com/watch?v=SNlF-4guz8w"}, {title:"coffe point", id:3, latitud:-34.102389, longitud:-54.1121200, url:"https://www.youtube.com/watch?v=SNlF-4guz8w"}])
    return (
        <TodoList todos={todos}/>
    )
}