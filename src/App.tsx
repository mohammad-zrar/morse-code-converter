// import BaseInput from "./components/BaseInput";
import { ChangeEvent, useState } from "react";
import { MORSE_KEYS } from "./constants";

const App = () => {
  const [text, setText] = useState("");
  const [morseCode, setMorseCode] = useState("");

  const handleTextInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    let newMorseCode = "";
    const newValue = e.target.value.replace(/ /g, '');
    setText(newValue);
    console.log('State: ', text);
    console.log("Event Targe Value: ", e.target.value.trim());

    [...newValue].forEach((letter) => (newMorseCode += MORSE_KEYS[letter]));
    setMorseCode(newMorseCode);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="flex justify-center items-center h-20 bg-gray-200  drop-shadow-md">
          <h1 className="text-4xl text-gray-800 font-bold">
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
