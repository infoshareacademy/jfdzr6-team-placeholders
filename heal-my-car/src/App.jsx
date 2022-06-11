import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from "../auth/ProtectedRoute";
import Register from "../routes/Register";
import Login from "../routes/Login";
import PasswordReset from "../routes/PasswordReset";
import Home from "../routes/Home";
import ClientPanel from "../routes/ClientPanel";
import AdminPanel from "../routes/AdminPanel";
import Repairs from "../routes/Repairs";
import WrongPath from "../routes/WrongPath";
import Wrapper from "../components/Wrapper";
import { Form1 } from "../components/Form1";
import { Form2 } from "../components/Form2";
import { ClientDetails } from "../components/ClientDetails";
import { Contact } from "../components/Contact";


// import { useEffect } from "react";
// import { Wrapper } from "../components/repair-forms/Repair-form";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Form1 } from "../components/repair-forms/Repair-form1";
// import { Form2 } from "../components/repair-forms/Repair-form2";

function App() {
  const role = 'user'

  // const [role, setRole] = useState(null) // 'guest' | 'user' | 'admin'

  // useEffect(() => {
  //   setRole('admin')
  // }, [])

  useEffect(() => {
    getRepairs();
  });
  const getRepairs = () => {
    const collection0 = collection(db, 'repairs');
    getDocs(collection0).then((QuerySnapshot) => {
      QuerySnapshot.docs.forEach((doc) => {
        console.log('zlecenie naprawy', doc.data());
      });
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={role === 'guest' ? < Home /> : (role === 'user' ? <ClientPanel /> : <AdminPanel />)} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='password-reset' element={<PasswordReset />} />
        <Route path='contact' element={< Contact />} />

        {/* Admin Routing */}
        <Route element={<ProtectedRoute isAllowed={role === 'admin'} />}>
          <Route path='admin-panel' element={<AdminPanel />}>
            <Route path='repairs' element={<Repairs />} />
          </Route>
        </Route>

        {/* Client Routing */}
        <Route element={<ProtectedRoute isAllowed={role === 'user'} />}>
          <Route path='client-id' element={< ClientPanel />} >
            <Route path='repair-form' element={< Wrapper />} >
              <Route path='repair-form1' element={< Form1 />} />
              <Route path='repair-form2' element={< Form2 />} />
            </Route>
            <Route path='details' element={< ClientDetails />} />
          </Route>
        </Route>
        <Route path='*' element={<WrongPath />} />
      </Routes>
    </BrowserRouter >
  )
}
export default App;
