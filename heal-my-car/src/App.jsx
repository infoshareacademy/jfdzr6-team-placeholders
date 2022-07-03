import { auth, db } from "./Firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import Register from "../routes/Register";
import { Login } from "../routes/Login";
import PasswordReset from "../routes/PasswordReset";
import Home from "../routes/Home";
import ClientPanel from "../routes/ClientPanel";
import AdminPanel from "../routes/AdminPanel";
import WrongPath from "../routes/WrongPath";
import { Wrapper } from "../components/Repair-forms/Repair-form";
import { Form1 } from "../components/Repair-forms/Repair-form1";
import { Form2 } from "../components/Repair-forms/Repair-form2";
import { Form3 } from "../components/Repair-forms/Repair-form3";
import { Form4 } from "../components/Repair-forms/Repair-form4";
import NewTasks from "../routes/NewTasks";
import { onAuthStateChanged } from "firebase/auth";
import DoneTasks from "../routes/DoneTasks";

function App() {
  const [role, setRole] = useState(null);
  const [userData, setUserData] = useState({ clientRepairs: [] });

  const getClientData = (id) => {
    const userData = doc(db, "clients", id);

    getDoc(userData).then((docData) => {
      const data = docData.data();
      if (!data) {
        return;
      }
      setUserData({ id: docData.id, ...data });

      data.isAdmin ? setRole("admin") : setRole("user");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth status changed", user);
      if (user) {
        getClientData(user.uid);
      } else {
        setRole("guest");
      }
    });
  }, []);

  if (!role) {
    return <p>Trwa ładowanie strony...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            index
            element={
              role === "guest" ? (
                <Home />
              ) : role === "user" ? (
                <Home />
              ) : (
                <NewTasks />
              )
            }
          />
          <Route element={<ProtectedRoute isAllowed={role === "guest"} />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="password-reset" element={<PasswordReset />} />
          </Route>

          {/* Admin Routing */}
          <Route element={<ProtectedRoute isAllowed={role === "admin"} />}>
            <Route path="repairsdone" element={<DoneTasks />} />
            <Route path="newtasks" element={<NewTasks />} />
            <Route path="inprogress" element={<AdminPanel />} />
          </Route>

          <Route
            element={
              <ProtectedRoute isAllowed={role === "user" || role === "guest"} />
            }
          >
            <Route
              path="repair-form"
              element={role === "user" ? <Wrapper /> : <Login />}
            >
              <Route
                path="repair-form1"
                element={role === "user" ? <Form1 /> : <Login />}
              />
              <Route
                path="repair-form2"
                element={role === "user" ? <Form2 /> : <Login />}
              />
              <Route
                path="repair-form3"
                element={role === "user" ? <Form3 /> : <Login />}
              />
              <Route
                path="repair-form4"
                element={
                  role === "user" ? (
                    <Form4 userData={userData} refreshData={getClientData} />
                  ) : (
                    <Login />
                  )
                }
              />
            </Route>
          </Route>

          {/* <Route path="repair-form" element={<Wrapper />}>
            <Route path="repair-form1" element={<Form1 />} />
            <Route path="repair-form2" element={<Form2 />} />
            <Route path="repair-form3" element={<Form3 />} />
            <Route
              path="repair-form4"
              element={
                <Form4 userData={userData} refreshData={getClientData} />
              }
            />
          </Route> */}
          {/* Client Routing */}
          <Route element={<ProtectedRoute isAllowed={role === "user"} />}>
            <Route path="/" element={<Home />} />
            <Route
              path="client-panel"
              element={<ClientPanel userId={userData.id} />}
            />
          </Route>
          <Route path="*" element={<WrongPath />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
