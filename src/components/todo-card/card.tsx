"use client"
import React, { useState } from 'react'
const initialData = [
    { title: 'States in the React' },
    { title: 'How to update State' },
]

export const Card = () => {
    const [todos, setTodos] = useState(initialData);
    const [inputValue, setInputValue] = useState('');
    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;
        const newTodo = {
            title: inputValue
        };
        setTodos([newTodo, ...todos]);
        setInputValue('');
    };

  return (
    <div className=''>
        <h2 className='pb-[10px]'>Add todo</h2>
        <input 
            type="text" 
            className='border-white w-[400px] border-[1px] rounded-[5px] h-[30px] pt-[30px] pb-[30px]'
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='border-white flex mt-[30px] p-[5px] border-[1px] rounded-[5px]' onClick={handleAddTodo}>Add todo</button>

        <ul className='pt-[30px] flex flex-col gap-[15px]'>
        {todos.map((item, key) => {
            return (
                <li className='border-white border-[0.5px] p-[15px] pb-[30px] w-[400px] rounded-2xl' key={key}>
                    <h1><strong>Title:</strong> {item.title}</h1>
                </li>
            )
        })}
        </ul>
    </div>
  )
}