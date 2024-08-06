"use client";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const [newSecond, setNewSecond] = useState();

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10); // 10ms interval for centiseconds
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTime(0);
  };

  useEffect(() => {
    // Clean up interval on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  const sec = Math.floor(time / 10);

  console.log(sec);

  const formatTime = (time) => {
    const centiseconds = `0${time % 100}`.slice(-2);
    const seconds = Math.floor(time / 100);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    // return `${getMinutes}:${getSeconds}:${centiseconds}`;
    return (
      <div className="flex justify-center">
        <h1 className="mx-auto w-[1200px]">
          <span className="">{getMinutes}</span>:
          <span className="">{getSeconds}</span>:
          <span className="">{centiseconds}</span>
        </h1>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-inter sx:text-[5rem] py-[1.5rem] text-[4rem] font-extrabold text-white sm:text-[7rem] lg:text-[14rem]">
        {formatTime(time)}
      </div>

      <div className="mb-20 mt-2 flex flex-col sm:flex-row">
        {!isRunning ? (
          <Button
            btnName="Resume"
            className="bg-pink-400 px-4 text-white duration-150 hover:bg-[#5b4266]"
            onClick={startTimer}
          />
        ) : (
          <Button
            onClick={stopTimer}
            btnName="Pause"
            className="bg-pink-400 px-4 py-2 text-white duration-150 hover:bg-[#5b4266]"
          />
        )}

        <Button
          onClick={resetTimer}
          btnName="Reset"
          className="bg-[#5b4266] px-4 py-2 text-white duration-150 hover:bg-slate-100 hover:text-black"
        />
      </div>
    </div>
  );
};

export default StopWatch;
