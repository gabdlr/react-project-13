import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import authToken from "./config/authToken";
//Components
//Profile view
import ViewProfile from "./components/ViewProfile/ViewProfile";
//Users
import UsersLayout from "./components/Users/UsersLayout";
import Login from "./components/Users";
import Register from "./components/Users/Register";
import EditProfile from "./components/Users/Profile/EditProfile";
//Redux
import { Provider } from "react-redux";
import store from "./store"; 

//Search for token
const token = localStorage.getItem('token');
if(token){
  authToken(token);
}
function App() { 
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes> 
            <Route path="/" element={<ViewProfile/>}/>
            <Route path="Users" element={<UsersLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="Register" element={<Register/>}/>
            </Route>
            <Route path="Users/EditProfile" element={<EditProfile/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
