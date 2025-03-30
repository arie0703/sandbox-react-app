import { useState } from "react";

export const Cookie = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentCookie, setCurrentCookie] = useState(document.cookie);

  const setCookie = (value: string) => {
    document.cookie = value;
    setCurrentCookie(document.cookie);
  };

  return (
    <>
      <div className="cookie">
        <div className="cookie-example">
          <p>Cookie Value Example</p>
          <code>KEY=VALUE; Max-Age=100;</code>
        </div>
        <p>Current Cookie</p>
        <code>{currentCookie}</code>
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <div>
            <button onClick={() => setCookie(inputValue)}>Set Cookie</button>
          </div>
        </div>
      </div>
    </>
  );
};
