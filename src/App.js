//Components
import ViewProfile from "./components/ViewProfile/ViewProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store"; 
import Login from "./components/Users/Login";
function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes> 
            <Route path="/" element={<ViewProfile/>}/>
            <Route path="/Login" element={<Login/>}/> 
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
