import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect, Fragment } from "react";
import { db } from "../src/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Collapse } from "@mui/material";

const Repairstatus = () => {
  const [repairs, setRepairs] = useState([]);
  const [openRowIndex, setOpenRowIndex] = useState(null);

  useEffect(() => {
    getRepairs();
  }, []);

  // const repairTasks = async () => {
  //   const repairs = await getDocs(collection('repairs'));
  //   setRepairs(repairs);
  // }

  const getRepairs = () => {
    const repairsCollection = collection(db, "repairs");
    const pendingRepairsQuery = query(
      repairsCollection,
      where("isDone", "==", false)
    );

    getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
      setRepairs(QuerySnapshot.docs.map((doc) => doc.data()));
    });
  };

  const handleCollapse = (index) => {
    if (openRowIndex === index) {
      setOpenRowIndex(null);
      return;
    }

    setOpenRowIndex(index);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Brand</b>
            </TableCell>
            <TableCell>
              <b>VIN</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repairs.map((row, index) => (
            <Fragment key={row.carVin}>
              <TableRow
                onClick={() => handleCollapse(index)}
                style={{
                  backgroundColor: openRowIndex === index ? "#f5f5f5" : "#fff",
                  cursor: "pointer",
                }}
                sx={{ "&:last-child td, &:last-child th": { border: 50 } }}
              >
                <TableCell>{row.carBrand}</TableCell>
                <TableCell>{row.carVin}</TableCell>
                <TableCell>{row.isDone ? "Done" : "Pending"}</TableCell>
              </TableRow>
              <TableRow>
                {row.tasks.map((task, i) => (
                  <TableCell key={`${row.clientId}-${row.carVin}-${i}`}>
                    <Collapse in={openRowIndex === index}>
                      <i>
                        {task.task}
                        {task.price}
                      </i>
                    </Collapse>
                  </TableCell>
                ))}
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Repairstatus;
