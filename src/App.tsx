import dayGenerator from "./scripts/dayGenerator";

export default function App() {
  // Properties
  const dayName = dayGenerator();

  return (
    <div className="App">
      <h1>CI/CD Intermediate 🥈</h1>
      Today is: @{dayName}@
    </div>
  );
}
