import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminPanel } from "../routes/AdminPanel";
import { WrongPath } from "../routes/WrongPath";
import { ProtectedRoute } from "../routes/ProtectedRoute";


function App() {
  const role = 'admin'
  // useEffect(() => {
  //   getRepairs();
  // });

  // const getRepairs = () => {
  //   const collection0 = collection(db, "repairs");
  //   getDocs(collection0).then((QuerySnapshot) => {
  //     QuerySnapshot.docs.forEach((doc) => {
  //       console.log("zlecenie naprawy", doc.data());
  //     });
  //   });
  // };

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routing */}
        <Route element={<ProtectedRoute isAllowed={role === 'admin'} />}>
          <Route path='admin-panel' element={<AdminPanel />}>
          </Route>
        </Route>
        <Route path='*' element={<WrongPath />} />
      </Routes>
    </BrowserRouter >
  )
}
export default App;
