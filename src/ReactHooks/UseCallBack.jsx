import { useState, useEffect, useCallback } from "react";

//  returns a memoized function, it doesn't call the function it actually returns the definition so we can call the same function later
const UseCallBack = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  // const sum = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New sum. value: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]);

  return (
    <main className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || "--"}</h1>
      <p>Result: </p>
    </main>
  );
};

export default UseCallBack;
