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
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirstPage from "./components/Dashboard/FirstPage";
import AddParts from "./components/Dashboard/AddParts";
import AddReview from "./components/Dashboard/AddReview";
import MyPurchase from "./components/Purchase/MyPurchase";
import ManageOrder from "./components/Dashboard/ManageOrder";
import RequireAdmin from "../src/components/RequireAdmin/RequireAdmin";
import Payment from "./components/Purchase/Payment";

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
          <Route index path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="newparts"
            element={
              <RequireAdmin>
                <AddParts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addreview"
            element={
              <RequireAdmin>
                <AddReview />
              </RequireAdmin>
            }
          ></Route>
          <Route path="mypurchase" element={<MyPurchase />}></Route>
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrder />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
