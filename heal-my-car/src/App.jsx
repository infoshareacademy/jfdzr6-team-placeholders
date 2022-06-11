import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Wrapper } from "../components/repair-forms/Repair-form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Form1 } from "../components/repair-forms/Repair-form1";
import { Form2 } from "../components/repair-forms/Repair-form2";


function App() {
  useEffect(() => {
    getRepairs();
  });

  const getRepairs = () => {
    const collection0 = collection(db, "repairs");
    getDocs(collection0).then((QuerySnapshot) => {
      QuerySnapshot.docs.forEach((doc) => {
        console.log("zlecenie naprawy", doc.data());
      });
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="repair-form" element={<Wrapper />}>
          <Route path="repair-form1" element={<Form1 />} />
          <Route path="repair-form-2" element={<Form2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
