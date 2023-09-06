import { useCallback, useEffect, useMemo, useState } from "react";

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {
    //do something expensive
  }
  return ["Dave", "Gray"];
};

// useMemo  memoize a value not the function (that would be useCallback)
const UseMemo = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)), []);

  const myArray = useMemo(() => getArray(), []);
  // useMemo memoizes the results of a function that is called.(provide a memoized result)
  //useCallback will deliver a memoized function func that can then be called.(provide a memoized func)
  const fibNumber = useMemo(() => fib(userNumber), [fib, userNumber]);

  useEffect(() => {
    console.log("new Array");
  }, [myArray]);

  useEffect(() => {
    console.log(`new number`);
  }, [fibNumber]);
  return (
    <main className="App">
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </main>
  );
};

export default UseMemo;
