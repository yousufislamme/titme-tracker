"use client";
import StopWatch from "@/components/StopWatch";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Stopwatch");
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (event) => {
    setTitle(event.target.value);
    setIsEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  return (
    <main className="bg-black">
      <h1>Stop Watch.</h1>
      <div className="flex w-full justify-center">
        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            autoFocus
            className="mt-2 border-none bg-transparent text-center text-3xl font-semibold text-slate-50 outline-none"
          />
        ) : (
          <h1
            className="mt-2 cursor-pointer text-3xl font-semibold text-slate-50"
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
