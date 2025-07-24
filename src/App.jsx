import AuthControl from "./components/AuthControl";
import CounterControl from "./components/counterControl";
import CounterDisplay from "./components/counterDisplay";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Redux React App</h1>
      <CounterDisplay />
      <CounterControl />
      <div style={{ marginTop: "20px" }}>
        <AuthControl />
      </div>
    </div>
  );
}
export default App;
