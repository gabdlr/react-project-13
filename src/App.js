//Components
import ViewProfile from "./components/ViewProfile/ViewProfile";
//Redux
import { Provider } from "react-redux";
import store from "./store"; 
function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <ViewProfile/>
      </Provider>
    </div>
  );
}

export default App;
