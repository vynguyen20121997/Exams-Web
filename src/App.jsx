import "./App.css";
import { backGround } from "./components/Background/Background";
import StartingPage from "./feature/page/StartingPage/StartingPage";

function App() {
  return (
    <div class={backGround}>
      <StartingPage />
    </div>
  );
}

export default App;
