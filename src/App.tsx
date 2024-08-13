import BaseInput from "./components/BaseInput";
import { useState } from "react";

const App = () => {
  const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    "?": "..--..",
    "!": "-.-.--",
    ".": ".-.-.-",
    ",": "--..--",
    ";": "-.-.-.",
    ":": "---...",
    "+": ".-.-.",
    "-": "-....-",
    "/": "-..-.",
    "=": "-...-",
  };
  const [text, setText] = useState("");
  const [morseCode, setMorseCode] = useState("");

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="flex justify-center items-center h-20 bg-gray-200  drop-shadow-md">
          <h1 className="text-4xl text-gray-900 font-bold">
            Morse Code Converter
          </h1>
        </header>
        <main className="text-center">
          <div className="flex flex-col justify-center mt-[10%] gap-8 mx-auto w-[50%]">
            <BaseInput
              id="morse-input"
              label="Morse Code"
              placeholder="Morse Code"
              value={morseCode}
              onChange={(e) => setMorseCode(e.target.value)}
            />
            <BaseInput
              id="text-input"
              label="Text"
              placeholder="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <pre>{morse["!"]}</pre>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
