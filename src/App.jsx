import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  // eslint-disable-next-line react/prop-types
  function Button({ name }) {
    const color1 = name === color ? "white" : name;
    const color2 = name === color ? "black" : "white";

    return (
      <button
        key={name}
        className="py-2 px-4 font-medium rounded-lg hover:scale-110 animate-bounce duration-150 ease-in-out capitalize"
        onClick={() => {
          setColor(name);
        }}
        style={{
          color: color1,
          backgroundColor: color2,
          border: `3px solid ${color1}`,
        }}
      >
        {name}
      </button>
    );
  }

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
      <div className="grid place-items-center gap-4 pt-12">
        <div className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Bg Changer
        </div>
        <div className="text-xl sm:text-2xl text-zinc-50 mx-4">
          Click on the buttons to change the background color, made with React,
          TailwindCSS and Vite
        </div>
        <div className="">
          <a
            href="https://github.com/soham901/bg-changer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/github/stars/soham901/bg-changer?style=social"
              alt="GitHub stars"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-4 bottom-6 absolute justify-center w-full">
        <Button name="red" />
        <Button name="green" />
        <Button name="blue" />
        <Button name="orange" />
        <Button name="lime" />
      </div>
    </div>
  );
}

export default App;
