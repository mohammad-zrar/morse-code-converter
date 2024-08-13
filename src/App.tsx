// import BaseInput from "./components/BaseInput";
import { ChangeEvent, useState } from "react";

const App = () => {
  const morse: { [key: string]: string } = {
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
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
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

  const handleTextInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    let newMorseCode = "";
    setText(e.target.value);

    [...e.target.value].forEach((letter) => (newMorseCode += morse[letter]));
    setMorseCode(newMorseCode);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="flex justify-center items-center h-20 bg-gray-200  drop-shadow-md">
          <h1 className="text-4xl text-gray-900 font-bold">
            Morse Code Converter
          </h1>
        </header>
        <main className="flex items-center justify-center  bg-gray-100 p-4">
          <div className="flex flex-col justify-center gap-8 mx-auto w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mt-[4rem]">
            <textarea
              name="textString"
              id="text-string"
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your text here..."
              value={text}
              onChange={handleTextInput}
            />

            <textarea
              name="textString"
              id="text-string"
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 "
              placeholder="Morse Code..."
              disabled
              value={morseCode}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
