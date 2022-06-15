import React from 'react'

export function TodoList({ todos }) {
    
    return (
    <div>
      { todos.map((todo)=>(
        <div>
            <p>Lugar: { todo.title } Latitud: { todo.latitud } Longitud: { todo.longitud } url: { todo.url }</p>
            <button>🖹</button>
            <button>🗑</button>
        </div>
      )) }
    </div>
  )
}
