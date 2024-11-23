import React from "react";
import tick from "../assets/tick.png";
import delete_icon from "../assets/delete.png";

export default function TodoItems({ text }) {
    return (
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1  items-center cursor-pointer">
                <img src={tick} alt="" className="w-7" />
                <p className="text-slate-700 ml-4  text-[17px]">{text}</p>
            </div>
            <img src={delete_icon} alt="" className="w-3.5 cursor-pointer" />
        </div>
    );
}
