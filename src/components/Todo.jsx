import React, { useEffect, useRef, useState } from "react";
import to_do from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

export default function Todo() {
    const [todoList, setTodoList] = useState(
        localStorage.getItem("todoList")
            ? JSON.parse(localStorage.getItem("todoList"))
            : []
    );

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        } else {
        }

        const newTodo = {
            id: todoList.length + 1,
            text: inputText,
            isCompleted: false,
        };

        setTodoList((prev) => [...prev, newTodo]);

        inputRef.current.value = "";
    };

    const deleteTodo = (id) => {
        setTodoList((prvTodo) => {
            return prvTodo.filter((todo) => todo.id !== id);
        });
    };

    const toggle = (id) => {
        setTodoList((prevTodo) => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
            });
        });
    };

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            <div className="flex items-center mt-7 gap-2">
                <img className="w-8" src={to_do} alt="" />
                <h1>To-Do List</h1>
            </div>
            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input
                    ref={inputRef}
                    type="text"
                    className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
                    placeholder="To-Do List"
                />
                <button
                    onClick={add}
                    className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
                >
                    add
                </button>
            </div>
            <div className="">
                {todoList.map((item, index) => {
                    return (
                        <TodoItems
                            key={index}
                            text={item.text}
                            id={item.id}
                            isCompleted={item.isCompleted}
                            deleteTodo={deleteTodo}
                            toggle={toggle}
                        />
                    );
                })}
            </div>
        </div>
    );
}
