import { Provider } from "react-redux";
import RepositoriesList from "./components/RepositoriesList";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
      <h1>Search Package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
