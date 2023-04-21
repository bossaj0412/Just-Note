import Home from "./Components/Home";
import DataProvider from "./Components/Context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
