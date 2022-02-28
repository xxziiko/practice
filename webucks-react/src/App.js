import "./App.css";
import "./pages/styles/reset.css";
import "./pages/styles/common.css";
import LoginComponent from "./pages/Login/Login";
import ListComponent from "./pages/List/List";

function App() {
  return (
    <div>
      <LoginComponent></LoginComponent>

      <ListComponent></ListComponent>
    </div>
  );
}
export default App;
