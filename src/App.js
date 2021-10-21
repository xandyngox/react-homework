import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//The line above imports all the necessary css files similar to the way done in html.
//Imports in React are neccessary whenever you want to reference an outside file or library.
import Feed from "./Components/Feed";
import Navigbar from "./Components/Navigbar";
// Import Bootstrap Navigation Bar HERE
// Remember that it should be used as a React Component

function App() {
  return (
    <div className="App">
      <Navigbar />
      <h1>Blockstagram</h1>
      <Feed />
    </div>
  );
}

export default App;
