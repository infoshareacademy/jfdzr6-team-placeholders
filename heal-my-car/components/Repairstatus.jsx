import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { db } from "../src/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Collapse } from '@mui/material';

const Repairstatus = () => {
  const [repairs, setRepairs] = useState([]);
  const [openRowIndex, setOpenRowIndex] = useState();
  const [closeRowIndex, setCloseRowIndex] = useState();

  useEffect(() => {
    getRepairs();
  }, []);

  const repairTasks = async () => {
    const repairs = await getDocs(collection('repairs'));
    setRepairs(repairs);
  }

  const getRepairs = () => {
    const repairsCollection = collection(db, "repairs");
    const pendingRepairsQuery = query(repairsCollection, where("isDone", "==", false));

    getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
      setRepairs(QuerySnapshot.docs.map((doc) => doc.data()));
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Brand</b></TableCell>
            <TableCell><b>VIN</b></TableCell>
            <TableCell><b>Status</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repairs.map((row, index) => (
            <>
            <TableRow
              key={row.carVin}
              onClick={() => setOpenRowIndex(index)}
              onDoubleClick={() => setCloseRowIndex(index)}
              style={{ cursor: 'pointer' }}
              sx={{ '&:last-child td, &:last-child th': { border: 50 } }}
            >
              <TableCell>
                {row.carBrand}
              </TableCell>
              <TableCell>
                {row.carVin}
              </TableCell>
              <TableCell>
                {row.isDone ? "Done" : "Pending"}
              </TableCell>
            </TableRow>
            <TableRow>
              <Collapse in={index === openRowIndex}>
              {row.tasks.map((task) => (
                <TableCell>
                  <i>{task.task}{task.price}</i>
                </TableCell>
              ))}
              </Collapse>
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Repairstatus;
