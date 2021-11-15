import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import authToken from "./config/authToken";
//Components
//Profile view
import Home from "./components/Home";
import ViewProfile from "./components/ViewProfile/ViewProfile";
//Users
import UsersLayout from "./components/Users/UsersLayout";
import Login from "./components/Users";
import Register from "./components/Users/Register";
import EditProfile from "./components/Users/Profile/EditProfile";
//Redux
import { Provider } from "react-redux";
import store from "./store"; 
import Protected from "./components/Protected";

//Search for token
const token = localStorage.getItem('token');
if(token){
  authToken(token);
}
function App() { 
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/ViewProfile/:id" element={<ViewProfile/>}/>
            <Route path="Users" element={<UsersLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="Register" element={<Register/>}/>
            </Route>  
            <Route path="Users/EditProfile" element={
              <Protected>
                <EditProfile/>
              </Protected>} 
            />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
