import AuthControl from "./components/AuthControl";
import CounterControl from "./components/counterControl";
import CounterDisplay from "./components/counterDisplay";
import UserComponent from "./components/UserComponent";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Redux React App</h1>
      <CounterDisplay />
      <CounterControl />
      <div style={{ marginTop: "20px" }}>
        <AuthControl />
      </div>
      <UserComponent />
    </div>
  );
}
export default App;
