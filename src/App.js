import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const Component = (props) => {
  const [count, setCount] = useState(0);
  let ref = useRef();
  function getClicked() {
    ref.current.className = "selected";
    setCount(count + 1);
  }
  return (
    <div class="grid-item" ref={ref} onClick={() => getClicked()}>
      {props.text}
    </div>
  );
};
function App() {
  const [cards, setCards] = useState([
    { value: 1, isSelected: false, isRemoved: false },
    { value: 2, isSelected: false, isRemoved: false },
    { value: 3, isSelected: false, isRemoved: false },
    { value: 4, isSelected: false, isRemoved: false },
    { value: 5, isSelected: false, isRemoved: false },
    { value: 6, isSelected: false, isRemoved: false },
    { value: 7, isSelected: false, isRemoved: false },
    { value: 8, isSelected: false, isRemoved: false },
    { value: 1, isSelected: false, isRemoved: false },
    { value: 2, isSelected: false, isRemoved: false },
    { value: 3, isSelected: false, isRemoved: false },
    { value: 4, isSelected: false, isRemoved: false },
    { value: 5, isSelected: false, isRemoved: false },
    { value: 6, isSelected: false, isRemoved: false },
    { value: 7, isSelected: false, isRemoved: false },
    { value: 8, isSelected: false, isRemoved: false },
  ]);
  const [count, setCount] = useState();
  const [data, setData] = useState();
  if (count == 2) {
    setCount(0);
    setTimeout(
      () =>
        setData(
          data.map((item) => {
            return { ...item, isSelected: true };
          })
        ),
      1000
    );
  }
  // useEffect(() => {
  // }, );

  return (
    <div className="App">
      <div className="Container">
        {cards.map((card) => (
          <Component text={card.value} />
        ))}
      </div>
    </div>
  );
}

export default App;
