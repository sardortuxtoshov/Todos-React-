import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

export default function TodoItems({
    text,
    id,
    isCompleted,
    deleteTodo,
    toggle,
}) {
    return (
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1  items-center cursor-pointer">
                <img
                    onClick={() => toggle(id)}
                    src={isCompleted ? tick : not_tick}
                    alt=""
                    className="w-7"
                />
                <p
                    className={`text-slate-700 ml-4  text-[17px] decoration-slice-500 ${
                        isCompleted ? "line-through" : ""
                    }`}
                >
                    {text}
                </p>
            </div>
            <img
                onClick={() => deleteTodo(id)}
                src={delete_icon}
                alt=""
                className="w-3.5 cursor-pointer"
            />
        </div>
    );
}
