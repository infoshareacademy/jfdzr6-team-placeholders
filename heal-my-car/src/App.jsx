import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

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

  return <h1 style={{ textAlign: "center" }}>Firebase configuration test</h1>;
}

export default App;
