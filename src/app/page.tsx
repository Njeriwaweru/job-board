"use client"
import { useState } from "react";
import Button from "./components/button";

export default function Home() {

  const [counter, setCounter] = useState(0);

  const handleClick = (value: "inc" | "dec" | "reset") => {
    if (value === "inc") {
      setCounter(prevCount => prevCount + 1)
    } else if (value === "dec") {
      setCounter(prevCount => prevCount - 1)
    } else {
      setCounter(0)
    }
  }

  return (
    <div className="mt-6">
      <h1 className="text-center font-bold text-4xl">Job Board</h1>

      <p className="p-3 mt-10 text-3xl font-medium text-center">Counter : {counter}</p>
      <div className="flex gap-24 mt-10 p-3 justify-center">
        <Button variant="success" onClick={() => handleClick("inc")}>Increment</Button>
        <Button variant="danger" onClick={() => handleClick("dec")}>Decrement</Button>
        <Button variant="neutral" onClick={() => handleClick("reset")}>Reset</Button>
      </div>
    </div>
  );
}
