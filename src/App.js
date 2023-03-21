import "./styles.css";

import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <ClickCounter name="Shaheb" />
      <HoverCounter name="Ashish" />
    </div>
  );
}
