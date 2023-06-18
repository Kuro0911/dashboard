import "./App.css";
import { Insights } from "./components/Insights/Insights";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrap">
        <Insights />
      </div>
      {/*
      insights-block
      boxes */}
    </div>
  );
}

export default App;
