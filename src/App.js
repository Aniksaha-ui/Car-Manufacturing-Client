import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Purchase from "./components/Purchase/Purchase";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/Dashboard/Users";
import MyProfile from "./components/Dashboard/MyProfile";
import RequireAuth from "./components/RequireAuth.js/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/* nasted route  */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route index path="users" element={<Users></Users>}></Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
