// Project files
import dayGenerator from "./scripts/dayGenerator";
import "./styles/style.css";

export default function App() {
  // Properties
  const dayName = dayGenerator();

  return (
    <div className="App">
      <header>
        <h1>CI/CD Intermediate 🥈</h1>
        Today is: @{dayName}@
      </header>
    </div>
  );
}
