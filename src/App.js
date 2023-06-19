import "./App.css";
import { Insights } from "./components/Insights/Insights";
import { Navbar } from "./components/Navbar/Navbar";
import { Overall } from "./components/Overall-section/Overall";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrap">
        <Insights />
        <Overall />
      </div>
      {/*
      insights-block
      boxes */}
    </div>
  );
}

export default App;
