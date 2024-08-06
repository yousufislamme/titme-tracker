"use client";
import StopWatch from "@/components/StopWatch";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Write a Tile...");
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (event) => {
    setTitle(event.target.value);
    setIsEditing(false);
  };


  return (
    <main className="bg-[#2C1338]">
      <h1>Stop Watch.</h1>
      <div className="flex w-full justify-center">
        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            className="mt-2 border-none bg-transparent text-center text-3xl font-semibold text-slate-50 outline-none"
          />
        ) : (
          <h1
            className="mt-2 cursor-pointer text-3xl  font-semibold text-slate-50"
            onDoubleClick={handleDoubleClick}
          >
            {title}
          </h1>
        )}
      </div>
      <StopWatch />
    </main>
  );
}
